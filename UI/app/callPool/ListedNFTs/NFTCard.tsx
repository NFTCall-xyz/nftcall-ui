import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { useMemo } from 'react'

import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'

import { MAX_EXPRIY_TIME_MAP, MIN_STRIKE_PRICE_MAP } from 'app/constant/callPools'
import type { UseIds } from 'app/hooks/useIds'
import { safeGet } from 'app/utils/get'

import { Paragraph, Tiny, TooltipSpan } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NFTBaseCard from 'domains/data/nft/components/NFTBaseCard'
import NFTIcon from 'domains/data/nft/components/NFTIcon'
import { useNFTAssetsData } from 'domains/data/nft/hooks/useNFTAssetsData'
import type { BaseNFT, NFTStatus } from 'domains/data/nft/types'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

export type ListedNFT = BaseNFT & {
  userAddress: string
  minStrikePrice: number
  maxExpriyTime: number
  lowerLimitOfStrikePrice: BN
  updateTimestamp: number
  status: NFTStatus
}

export type NFTCardProps = ListedNFT & {
  ids: UseIds
}

const NFTCard: FC<NFTCardProps> = (props) => {
  const { tokenId, maxExpriyTime, minStrikePrice, lowerLimitOfStrikePrice } = props
  const { t } = useTranslation('app-callpool')
  const { nftAssetsData } = useNFTAssetsData(props)
  const minStrikePriceLabel = useMemo(
    () => safeGet(() => MIN_STRIKE_PRICE_MAP.find((option) => option.value === minStrikePrice).label),
    [minStrikePrice]
  )
  const maxExpriyTimeMapLabel = useMemo(
    () => safeGet(() => MAX_EXPRIY_TIME_MAP.find((option) => option.value === maxExpriyTime).label),
    [maxExpriyTime]
  )
  const title = `#${tokenId}`

  return (
    <NFTBaseCard {...props} id={tokenId}>
      <NFTIcon nftAssetsData={nftAssetsData} sx={{ padding: 1.5 }} />
      <CardContent sx={{ padding: 2, paddingTop: 0 }}>
        <Stack spacing={0.5}>
          <Paragraph>{title}</Paragraph>
          <FlexBetween>
            <Tooltip title={t('openPanel.minStrikePriceTip')}>
              <Box>
                <TooltipSpan fontSize={12}>{t('openPanel.minStrikePrice')}</TooltipSpan>
              </Box>
            </Tooltip>
            <Tiny color="text.secondary">+{minStrikePriceLabel}</Tiny>
          </FlexBetween>
          <FlexBetween>
            <Tooltip title={t('openPanel.lowerLimitOfStrikePriceTip')}>
              <Box>
                <TooltipSpan fontSize={12}>{t('openPanel.lowerLimitOfStrikePrice')}</TooltipSpan>
              </Box>
            </Tooltip>
            {!lowerLimitOfStrikePrice.isZero() ? (
              <Stack spacing={0.5} direction="row" alignItems="center">
                <TokenIcon symbol="ETH" sx={{ width: 12, height: 12 }} />
                <Tiny color="text.secondary">
                  <NumberDisplay value={lowerLimitOfStrikePrice} />
                </Tiny>
              </Stack>
            ) : (
              <Tiny color="text.secondary">{t('openPanel.unlimit')}</Tiny>
            )}
          </FlexBetween>
          <FlexBetween>
            <Tooltip title={t('openPanel.maxExpiryTimeTip')}>
              <Box>
                <TooltipSpan fontSize={12}>{t('openPanel.maxExpiryTime')}</TooltipSpan>
              </Box>
            </Tooltip>
            <Tiny color="text.secondary">{maxExpriyTimeMapLabel}</Tiny>
          </FlexBetween>
        </Stack>
      </CardContent>
    </NFTBaseCard>
  )
}

export default NFTCard
