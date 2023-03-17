import { format } from 'date-fns'
import { useWallet } from 'domains'
import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { useImmer } from 'use-immer'

import SettingsIcon from '@mui/icons-material/Settings'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import type { UseIds } from 'app/hooks/useIds'
import { safeGet } from 'app/utils/get'

import { Paragraph, Span, Tiny } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import { transaction } from 'domains/controllers/adapter/transaction'
import { useCallPools, useNetwork } from 'domains/data'
import CollectionName from 'domains/data/nft/components/CollectionName'
import NFTIcon from 'domains/data/nft/components/NFTIcon'
import { useNFTAssetsData } from 'domains/data/nft/hooks/useNFTAssetsData'
import type { BaseNFT, NFTActions } from 'domains/data/nft/types'
import { NFTStatus } from 'domains/data/nft/types'
import { getNFTId } from 'domains/data/nft/utils/id'

import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'

export type DepositedNFT = BaseNFT & {
  ids: UseIds
  deactivate: boolean
  paused: boolean
  callPoolAddress: string
  minStrikePrice: number
  maxExpriyTime: number
  lowerLimitOfStrikePrice: BN
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
    zIndex: 1,
    right: '0.75rem',
    top: '0.75rem',
  },
}))

const NFTCard: FC<DepositedNFT> = (props) => {
  const { t } = useTranslation('app-sell')
  const {
    tokenId,
    status: sourceStatus,
    position,
    restart,
    callPoolAddress,
    ids: { has, add, remove },
  } = props
  const { endTime } = position || ({} as undefined)
  const [status, setStatus] = useImmer(sourceStatus)
  const [loading, setLoading] = useImmer(false)
  const { nftAssetsData } = useNFTAssetsData(props)
  const nftActions = useMemo(() => {
    const returnValue: NFTActions = {
      setStatus,
      setLoading,
      update: restart,
    }
    return returnValue
  }, [restart, setLoading, setStatus])
  const {
    dialogs: {
      nftSetting: { open },
    },
  } = useCallPools()
  const openNFTSetting = useCallback(() => {
    open({
      ...props,
      status,
      actions: nftActions,
    })
  }, [nftActions, open, props, status])

  const {
    contracts: { callPoolService },
  } = useNetwork()
  const { networkAccount } = useWallet()
  const sendTransaction = useSendTransaction()
  const handleWithdraw = useCallback(() => {
    setLoading(true)
    return transaction({
      createTransaction: callPoolService.withdraw({
        callPool: callPoolAddress,
        user: networkAccount,
        tokenIds: [tokenId],
      }),
      setStatus: () => {},
      sendTransaction,
      isOnlyApprove: false,
    })
      .then(() => {
        setStatus(NFTStatus.Removed)
        close()
      })
      .finally(() => setLoading(false))
  }, [callPoolAddress, callPoolService, networkAccount, sendTransaction, setLoading, setStatus, tokenId])

  const actions = useMemo(() => {
    switch (status) {
      case NFTStatus.Listed:
        return (
          <FlexBetween width={1}>
            <Button disabled={loading} onClick={handleWithdraw} variant="contained">
              {t('nftcard.withdraw')}
            </Button>
            <IconButton aria-label="settings" onClick={openNFTSetting}>
              <SettingsIcon />
            </IconButton>
          </FlexBetween>
        )
      case NFTStatus.Deposited:
        return (
          <FlexBetween width={1}>
            <Button disabled={loading} onClick={handleWithdraw} variant="contained">
              {t('nftcard.withdraw')}
            </Button>
            <IconButton aria-label="settings" onClick={openNFTSetting}>
              <SettingsIcon />
            </IconButton>
          </FlexBetween>
        )
      case NFTStatus.Called:
        return (
          <FlexBetween width={1}>
            <Stack spacing={0.3}>
              <Tiny>{t('nftcard.expiryDate')}</Tiny>
              <Tiny color="text.primary">{format(endTime, 'MMM dd HH:mm')}</Tiny>
            </Stack>
            <IconButton aria-label="settings" onClick={openNFTSetting}>
              <SettingsIcon />
            </IconButton>
          </FlexBetween>
        )
      default:
        return null
    }
  }, [status, loading, handleWithdraw, t, openNFTSetting, endTime])

  if (status === 'Removed') return null
  const title = `#${tokenId}`
  const collection = safeGet(() => nftAssetsData.contractName) || ''
  const id = getNFTId(props)

  const checked = has(id)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      add(id)
    } else {
      remove(id)
    }
  }

  return (
    <Grid item xs={6} sm={3} md={2.5}>
      <ROOT>
        <Checkbox className="checkbox" checked={checked} onChange={handleChange} />
        <NFTIcon nftAssetsData={nftAssetsData} sx={{ padding: 1.5 }} />
        <CardContent sx={{ padding: 2, paddingTop: 0 }}>
          <Stack>
            <Paragraph>{title}</Paragraph>
            <CollectionName component={Span} color="text.secondary" name={collection} />
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
