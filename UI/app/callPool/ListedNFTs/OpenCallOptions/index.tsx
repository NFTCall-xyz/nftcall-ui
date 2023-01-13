import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { H3, Span } from 'components/Typography'
import type { MutableRefObject } from 'react'
import { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import { useCallPoolDetails, useNetwork } from 'domains/data'
import { toBN } from 'lib/math'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import { transaction } from 'domains/controllers/adapter/transaction'
import type { OpenCallProps } from 'lib/protocol/typechain/nftcall'
import { useControllers, useWallet } from 'domains'
import { useTheme } from '@mui/material'
import Stack from '@mui/material/Stack'
import FlexBetween from 'components/flexbox/FlexBetween'
import { MIN_STRIKE_PRICE_MAP, MAX_EXPRIY_TIME_MAP } from 'app/constant/callPools'
import type { ListedNFT } from '../NFTCard'
import NFTCard from './NFTCard'
import { useTranslation } from 'next-i18next'
import TokenIcon from 'lib/protocol/components/TokenIcon'

type OpenCallOptionsProps = {
  setRef: MutableRefObject<Set<string>>
  size: number
  request: any
  data: ListedNFT[]
  onCheckChange: any
}
const OpenCallOptions: FC<OpenCallOptionsProps> = ({
  setRef,
  size,
  request: updateListedData,
  data,
  onCheckChange,
}) => {
  const { t } = useTranslation('app-callpool')
  const [strikePriceGapIdx, setStrikePriceGapIdx] = useState(0)
  const [durationIdx, setDurationIdx] = useState(0)
  const [premiumToOwner, setPremiumToOwner] = useState(toBN(0))
  const [premiumToReserve, setPremiumToReserve] = useState(toBN(0))
  const [strikePrice, setStrikePrice] = useState(toBN(0))
  const ids = useMemo(() => {
    return Array.from(setRef.current.values())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size])

  const {
    callPool: { address, nftOracle, info: { symbol }, },
  } = useCallPoolDetails()
  const { networkAccount } = useWallet()
  const {
    contracts: { callPoolService },
  } = useNetwork()
  const sendTransaction = useSendTransaction()
  const fn = useCallback(
    (props: OpenCallProps) => {
      console.log(props)
      return transaction({
        createTransaction: callPoolService.openCall(props),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
    },
    [callPoolService, sendTransaction]
  )
  const {
    callPool: { previewOpenCall },
  } = useControllers()
  const request = useCallback(() => {
    if (!nftOracle || !ids.length) return
    previewOpenCall.single.run({
      tokenIds: ids,
      nftOracle,
    })
  }, [ids, nftOracle, previewOpenCall.single])
  useEffect(() => {
    request()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids])
  const theme = useTheme()

  return (
    <Card sx={{ border: 'solid 1px', borderColor: theme.palette.divider }}>
      <CardContent>
        <Stack spacing={2}>
          <H3>{t('openPanel.openCall')}</H3>
          <Stack spacing={1}>
            {ids.map((tokenId) => (
              <NFTCard key={tokenId} tokenId={tokenId} data={data} onCheckChange={onCheckChange} />
            ))}
          </Stack>
          <FlexBetween>
            <Span fontWeight='bold'>{t('openPanel.strikePrice')}</Span>
            <NumberDisplay value={strikePrice} />
            <Stack spacing={1} direction="row" alignItems="center">
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
              <MenuItem key={option.value} value={option.value}>
                {`${option.label} ${t('openPanel.increase')}`} 
              </MenuItem>
            ))}
          </Select>
          <FlexBetween>
            <Span fontWeight='bold'>{t('openPanel.expiryDate')}</Span>
          </FlexBetween>
          <Select
            value={durationIdx}
            onChange={(e) => {
              setDurationIdx(parseInt(e.target.value as any))
            }}
          >
            {MAX_EXPRIY_TIME_MAP.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {`${option.label} ${t('openPanel.later')}`} 
              </MenuItem>
            ))}
          </Select>
          <FlexBetween>
            <Span fontWeight='bold'>{t('openPanel.totalPremium')}</Span>
            <Stack spacing={1} direction="row" alignItems="center">
              <TokenIcon symbol={symbol} sx={{ width: 16, height: 16 }} />
              <NumberDisplay value={premiumToOwner.plus(premiumToReserve)} />
            </Stack>
          </FlexBetween>
          <FlexBetween>
            <Span fontWeight='bold'>{t('openPanel.yourBalance')}</Span>
            <Stack spacing={1} direction="row" alignItems="center">
              <TokenIcon symbol={symbol} sx={{ width: 16, height: 16 }} />
              <NumberDisplay value={0} />
            </Stack>
          </FlexBetween>
          <Button
            variant="contained"
            onClick={() => {
              callPoolService
                .previewOpenCall({
                  callPool: address.CallPool,
                  tokenIds: ids,
                  strikePriceGapIdx: strikePriceGapIdx,
                  durationIdx: durationIdx,
                })
                .then(({ premiumToOwner, premiumToReserve, strikePrice }) => {
                  setPremiumToOwner(premiumToOwner)
                  setPremiumToReserve(premiumToReserve)
                  setStrikePrice(strikePrice)
                })
            }}
          >
            Preview
          </Button>
          <Button
            variant="contained"
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
        </Stack>
      </CardContent>
    </Card>
  )
}

export default OpenCallOptions
