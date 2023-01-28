import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Alert from '@mui/material/Alert'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { H3, Span } from 'components/Typography'
import { useCallback, useEffect, useMemo } from 'react'
import { useState } from 'react'
import { useCallPoolDetails, useNetwork, useUser } from 'domains/data'
import { toBN } from 'lib/math'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import { transaction } from 'domains/controllers/adapter/transaction'
import type { OpenCallProps } from 'lib/protocol/typechain/nftcall'
import { useWallet } from 'domains'
import { useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import FlexBetween from 'components/flexbox/FlexBetween'
import { MIN_STRIKE_PRICE_MAP, MAX_EXPRIY_TIME_MAP } from 'app/constant/callPools'
import type { ListedNFT } from '../NFTCard'
import NFTCard from './NFTCard'
import { useTranslation } from 'next-i18next'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import type { UseIds } from 'app/hooks/useIds'
import { usePreviewOpenCall } from 'domains/data/callPools/hooks/usePreviewOpenCall'
import { getCurrentTime } from 'app/constant'
import { safeGet } from 'app/utils/get'
import { format } from 'date-fns'

type OpenCallOptionsProps = {
  request: any
  nfts: ListedNFT[]
  ids: UseIds
}
const OpenCallOptions: FC<OpenCallOptionsProps> = ({
  request: updateListedData,
  nfts,
  ids: { values: ids, remove, size },
}) => {
  const { t } = useTranslation('app-callpool')
  const {
    balanceOf: { balanceOf },
  } = useUser()
  const [strikePriceGapIdxSource, setStrikePriceGapIdx] = useState(1)
  const [durationIdxSource, setDurationIdx] = useState(MAX_EXPRIY_TIME_MAP.length - 1)
  const { strikePriceSetting, durationSetting, limitOfStrikePriceSetting } = useMemo(() => {
    const strikePriceSetting = {
      min: 0,
      max: MIN_STRIKE_PRICE_MAP.length - 1,
    }
    const durationSetting = {
      min: 0,
      max: MAX_EXPRIY_TIME_MAP.length - 1,
    }
    const limitOfStrikePriceSetting = {
      tokenId: '',
      min: toBN(0),
    }

    ids.forEach((id) => {
      const nft = nfts.find((i) => i.tokenId === id)
      if (!nft) return
      const { maxExpriyTime, minStrikePrice, lowerLimitOfStrikePrice } = nft
      if (maxExpriyTime < durationSetting.max) durationSetting.max = maxExpriyTime
      if (minStrikePrice > strikePriceSetting.min) strikePriceSetting.min = minStrikePrice
      if (lowerLimitOfStrikePrice.gt(limitOfStrikePriceSetting.min)) {
        limitOfStrikePriceSetting.min = lowerLimitOfStrikePrice
        limitOfStrikePriceSetting.tokenId = id
      }
    })
    return {
      strikePriceSetting,
      durationSetting,
      limitOfStrikePriceSetting,
    }
  }, [ids, nfts])
  const { strikePriceGapIdx, durationIdx } = useMemo(() => {
    let strikePriceGapIdx = strikePriceGapIdxSource
    let durationIdx = durationIdxSource
    if (strikePriceGapIdxSource < strikePriceSetting.min) strikePriceGapIdx = strikePriceSetting.min
    if (strikePriceGapIdxSource > strikePriceSetting.max) strikePriceGapIdx = strikePriceSetting.max
    if (durationIdxSource < durationSetting.min) durationIdx = durationSetting.min
    if (durationIdxSource > durationSetting.max) durationIdx = durationSetting.max
    return {
      strikePriceGapIdx,
      durationIdx,
    }
  }, [
    durationIdxSource,
    strikePriceGapIdxSource,
    durationSetting.max,
    durationSetting.min,
    strikePriceSetting.max,
    strikePriceSetting.min,
  ])

  const { callPool } = useCallPoolDetails()
  const {
    address,
    info: { symbol },
    premiums,
    nftOracle,
  } = callPool

  const { updatePreviewOpenCall } = usePreviewOpenCall(callPool)
  const [errors, setErrors] = useState<string[]>([])
  useEffect(() => {
    updatePreviewOpenCall()
    if (!ids.length) setErrors([])
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids])
  const { premiumToOwner, premiumToReserve, strikePrice, expriyTime } = useMemo(() => {
    const returnValue = {
      premiumToOwner: toBN(0),
      premiumToReserve: toBN(0),
      strikePrice: toBN(0),
      expriyTime: 0,
    }
    const curveIdx = strikePriceGapIdx * 4 + durationIdx
    const premium = premiums.find((i) => i.curveIdx === curveIdx)
    if (!premium) return returnValue
    const { currentPremium } = premium
    const price = nftOracle.price.multipliedBy(size)
    const premiumTotal = price.multipliedBy(currentPremium)

    returnValue.premiumToReserve = premiumTotal.multipliedBy(0.1)
    returnValue.premiumToOwner = premiumTotal.minus(returnValue.premiumToReserve)
    if (returnValue.premiumToOwner.lt(0.001 * size)) {
      setErrors(['Owner Premium is too small.'])
    } else {
      setErrors([])
    }
    const minStrikePriceMap = MIN_STRIKE_PRICE_MAP.find((i) => i.value === strikePriceGapIdx)
    const maxExpriyTimeMap = MAX_EXPRIY_TIME_MAP.find((i) => i.value === durationIdx)
    if (!minStrikePriceMap || !maxExpriyTimeMap) return returnValue
    returnValue.strikePrice = price.multipliedBy(minStrikePriceMap.number)
    if (limitOfStrikePriceSetting.min.multipliedBy(size).gt(returnValue.strikePrice)) {
      setErrors([`#${limitOfStrikePriceSetting.tokenId} Strike Price is too small.`])
    } else {
      setErrors([])
    }
    returnValue.expriyTime = getCurrentTime() + maxExpriyTimeMap.number
    return returnValue
  }, [
    durationIdx,
    limitOfStrikePriceSetting.min,
    limitOfStrikePriceSetting.tokenId,
    nftOracle.price,
    premiums,
    size,
    strikePriceGapIdx,
  ])

  const { networkAccount } = useWallet()
  const {
    contracts: { callPoolService },
  } = useNetwork()
  const sendTransaction = useSendTransaction()
  const fn = useCallback(
    (props: OpenCallProps) => {
      return transaction({
        createTransaction: callPoolService.openCall(props),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
    },
    [callPoolService, sendTransaction]
  )
  const theme = useTheme()

  return (
    <Card sx={{ border: 'solid 1px', borderColor: theme.palette.divider }}>
      <CardContent>
        <Stack spacing={4}>
          <H3>{t('openPanel.openCall')}</H3>
          <Stack spacing={1}>
            {ids.map((tokenId) => (
              <NFTCard key={tokenId} tokenId={tokenId} data={nfts} onCheckChange={() => remove(tokenId)} />
            ))}
          </Stack>
          <Stack spacing={1}>
            <FlexBetween>
              <Span fontWeight="bold">{t('openPanel.strikePrice')}</Span>
              <Stack spacing={0.5} direction="row" alignItems="center">
                <TokenIcon symbol={symbol} sx={{ width: 16, height: 16 }} />
                <NumberDisplay value={strikePrice} />
              </Stack>
            </FlexBetween>
            <Select
              value={strikePriceGapIdx}
              onChange={(e) => {
                setStrikePriceGapIdx(parseInt(e.target.value as any))
              }}
            >
              {MIN_STRIKE_PRICE_MAP.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  disabled={option.value < strikePriceSetting.min || option.value > strikePriceSetting.max}
                >
                  {`${option.label} ${t('openPanel.increase')}`}
                </MenuItem>
              ))}
            </Select>
          </Stack>
          <Stack spacing={1}>
            <FlexBetween>
              <Span fontWeight="bold">{t('openPanel.expiryDate')}</Span>
              <Span>{safeGet(() => format(expriyTime, 'MMM dd hh:mm'))}</Span>
            </FlexBetween>
            <Select
              value={durationIdx}
              onChange={(e) => {
                setDurationIdx(parseInt(e.target.value as any))
              }}
            >
              {MAX_EXPRIY_TIME_MAP.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                  disabled={option.value < durationSetting.min || option.value > durationSetting.max}
                >
                  {`${option.label} ${t('openPanel.later')}`}
                </MenuItem>
              ))}
            </Select>
          </Stack>
          <Stack spacing={2}>
            <FlexBetween>
              <Span fontWeight="bold">{t('openPanel.totalPremium')}</Span>
              <Stack spacing={0.5} direction="row" alignItems="center">
                <TokenIcon symbol={symbol} sx={{ width: 16, height: 16 }} />
                <NumberDisplay value={premiumToOwner.plus(premiumToReserve)} />
              </Stack>
            </FlexBetween>
            <FlexBetween>
              <Span fontWeight="bold">{t('openPanel.yourBalance')}</Span>
              <Stack spacing={0.5} direction="row" alignItems="center">
                <TokenIcon symbol={symbol} sx={{ width: 16, height: 16 }} />
                <NumberDisplay value={balanceOf} />
              </Stack>
            </FlexBetween>
          </Stack>
          <Button
            variant="contained"
            disabled={strikePrice.isZero() || !!errors.length}
            onClick={() => {
              fn({
                callPool: address.CallPool,
                tokenIds: ids,
                strikePriceGapIdx: strikePriceGapIdx,
                durationIdx: durationIdx,
                user: networkAccount,
              }).then(() => updateListedData())
            }}
          >
            {t('openPanel.open')}
          </Button>
          <Stack spacing={2}>
            {errors.map((error) => (
              <Alert severity="error" key={error}>
                {error}
              </Alert>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default OpenCallOptions
