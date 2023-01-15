import type { FC } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import FlexBetween from 'components/flexbox/FlexBetween'
import type { BaseNFT, NFTActions, NFTStatus } from 'domains/data/nft/types'
import { Paragraph, Tiny, Span } from 'components/Typography'
import { useNFTAssetsData } from 'domains/data/nft/hooks/useNFTAssetsData'
import NFTIcon from 'domains/data/nft/components/NFTIcon'
import { safeGet } from 'app/utils/get'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import { weiToValue } from 'lib/math'
import ListOnMarket from './ListOnMarket'
import { useCallPools } from 'domains/data'
import Grid from '@mui/material/Grid'
import { useTranslation } from 'next-i18next'
import SettingsIcon from '@mui/icons-material/Settings'
import IconButton from '@mui/material/IconButton'

export type DepositedNFT = BaseNFT & {
  callPoolAddress: string
  minStrikePrice: number
  maxExpriyTime: number
  status: NFTStatus
  restart: () => void
  position?: {
    premiumToOwner: BN
    strikePrice: BN
    endTime: number
  }
}

const ROOT = styled(Card)(({ theme }) => ({
  position: 'relative',
  border: 'solid 1px',
  borderColor: theme.palette.divider,
  '&:hover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary[200],
    ['.MuiButton-autoHide']: {
      opacity: 1,
    },
  },
  '& .checkbox': {
    position: 'absolute',
    right: '0.5rem',
    top: '0.5rem',
  },
}))

const NFTCard: FC<DepositedNFT> = (props) => {
  const { t } = useTranslation('app-sell')
  const { tokenId, status: sourceStatus, position, restart } = props
  const { premiumToOwner, strikePrice } = position || ({} as undefined)
  const [status, setStatus] = useState(sourceStatus)
  const [loading, setLoading] = useState(false)
  const { nftAssetsData } = useNFTAssetsData(props)
  const nftActions = useMemo(() => {
    const returnValue: NFTActions = {
      setStatus,
      setLoading,
      update: restart,
    }
    return returnValue
  }, [restart])
  const {
    dialogs: {
      nftSetting: { open },
    },
  } = useCallPools()
  const openNFTSetting = useCallback(() => {
    open({
      ...props,
      actions: nftActions,
    })
  }, [nftActions, open, props])

  const actions = useMemo(() => {
    switch (status) {
      case 'Listed':
        return (
          <FlexBetween width={1}>
            <Stack spacing={1}>
              <Tiny>{t('nftcard.listOnMarket')}</Tiny>
              <ListOnMarket checked={true} loading={loading} nft={props} nftActions={nftActions} />
            </Stack>
            <IconButton  aria-label="settings" disabled={loading} onClick={openNFTSetting}>
              <SettingsIcon />
            </IconButton>
          </FlexBetween>
        )
      case 'Deposited':
        return (
          <FlexBetween width={1}>
            <Stack spacing={1}>
              <Tiny>{t('nftcard.listOnMarket')}</Tiny>
              <ListOnMarket checked={false} loading={loading} nft={props} nftActions={nftActions} />
            </Stack>
            <IconButton  aria-label="settings" disabled={loading} onClick={openNFTSetting}>
              <SettingsIcon />
            </IconButton>
          </FlexBetween>
        )
      case 'Called':
        return (
          <FlexBetween width={1}>
            <Stack spacing={1}>
              <Tiny>{t('nftcard.strikePrice')}</Tiny>
              <Stack spacing={0.5} direction="row" alignItems="center">
                <TokenIcon symbol="ETH" sx={{ width: 16, height: 16 }} />
                <NumberDisplay value={weiToValue(strikePrice, 18)} />
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <Tiny>{t('nftcard.premiumEarned')}</Tiny>
              <Stack spacing={0.5} direction="row" alignItems="center">
                <TokenIcon symbol="ETH" sx={{ width: 16, height: 16 }} />
                <NumberDisplay value={weiToValue(premiumToOwner, 18)} />
              </Stack>
            </Stack>
          </FlexBetween>
        )
      default:
        return null
    }
  }, [status, loading, props, nftActions, openNFTSetting, strikePrice, premiumToOwner, t])

  if (status === 'Removed') return null
  const title = `#${tokenId}`
  const collection = safeGet(() => nftAssetsData.contractName) || ''

  return (
    <Grid item xs={6} sm={4} md={3}>
      <ROOT>
        <NFTIcon nftAssetsData={nftAssetsData} sx={{ padding: 1.5 }} />
        <CardContent>
          <Stack spacing={1}>
            <Paragraph>{title}</Paragraph>
            <Span color='text.secondary'>{collection}</Span>
          </Stack>
        </CardContent>
        <Divider />
        <CardActions
          sx={{
            justifyContent: 'center',
            padding: 2,
          }}
        >
          {actions}
        </CardActions>
      </ROOT>
    </Grid>
  )
}

export default NFTCard
