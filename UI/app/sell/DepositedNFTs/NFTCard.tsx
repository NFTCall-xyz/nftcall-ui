import type { FC } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import { useCallPools, useNetwork } from 'domains/data'
import { useWallet } from 'domains'
import { transaction } from 'domains/controllers/adapter/transaction'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import type { RelistNFTProps, TakeNFTOffMarketProps, WithdrawProps } from 'lib/protocol/typechain/nftcall'
import Stack from '@mui/material/Stack'
import FlexBetween from 'components/flexbox/FlexBetween'
import Switch from '@mui/material/Switch'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import type { BaseNFT, NFTStatus } from 'domains/data/nft/types'
import { Paragraph, Tiny } from 'components/Typography'
import { useNFTAssetsData } from 'domains/data/nft/hooks/useNFTAssetsData'
import NFTIcon from 'domains/data/nft/components/NFTIcon'
import { safeGet } from 'app/utils/get'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import { weiToValue } from 'lib/math'

export type DepositedNFT = BaseNFT & {
  minStrikePrice: number
  maxExpriyTime: number
  status: NFTStatus
  position?: {
    premiumToOwner: BN
    strikePrice: BN
    endTime: number
  }
}

const Root = styled(Card)(({ theme }) => ({
  position: 'relative',
  border: 'solid 1px',
  borderColor: theme.palette.divider,
  '&:hover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary[200],
  },
  '& .checkbox': {
    position: 'absolute',
    right: '0.5rem',
    top: '0.5rem',
  },
}))

const NFTCard: FC<DepositedNFT> = (props) => {
  const { tokenId, nftAddress, status: sourceStatus, position } = props
  const [status, setStatus] = useState(sourceStatus)
  const [loading, setLoading] = useState(false)
  const { nftAssetsData } = useNFTAssetsData(props)
  const {
    contracts: { callPoolService },
  } = useNetwork()
  const { callPools } = useCallPools()
  const callPool = useMemo(() => {
    return callPools.find((callPool) => callPool.address.NFT.toLowerCase() === nftAddress)
  }, [callPools, nftAddress])
  const { networkAccount } = useWallet()

  const sendTransaction = useSendTransaction()
  const relistNFT = useCallback(
    (props: RelistNFTProps) => {
      setLoading(true)
      return transaction({
        createTransaction: callPoolService.relistNFT(props),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
        .then(() => setStatus('Listed'))
        .finally(() => setLoading(false))
    },
    [callPoolService, sendTransaction]
  )
  const takeNFTOffMarket = useCallback(
    (props: TakeNFTOffMarketProps) => {
      setLoading(true)
      return transaction({
        createTransaction: callPoolService.takeNFTOffMarket(props),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
        .then(() => setStatus('Deposited'))
        .finally(() => setLoading(false))
    },
    [callPoolService, sendTransaction]
  )
  const withdraw = useCallback(
    (props: WithdrawProps) => {
      setLoading(true)
      return transaction({
        createTransaction: callPoolService.withdraw(props),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
        .then(() => setStatus('Removed'))
        .finally(() => setLoading(false))
    },
    [callPoolService, sendTransaction]
  )
  const actions = useMemo(() => {
    switch (status) {
      case 'Listed':
        return (
          <FlexBetween>
            <Stack spacing={1}>
              <p>List on Market</p>
              <Switch
                checked={true}
                disabled={loading}
                onChange={() => {
                  takeNFTOffMarket({
                    callPool: callPool.address.CallPool,
                    user: networkAccount,
                    tokenId,
                  })
                }}
              />
            </Stack>
            <Box>
              <Button
                disabled={loading}
                onClick={() => {
                  withdraw({
                    callPool: callPool.address.CallPool,
                    user: networkAccount,
                    tokenId,
                  })
                }}
              >
                Withdraw
              </Button>
            </Box>
          </FlexBetween>
        )
      case 'Deposited':
        return (
          <FlexBetween>
            <Stack spacing={1}>
              <p>List on Market</p>
              <Switch
                checked={false}
                disabled={loading}
                onChange={() => {
                  relistNFT({
                    callPool: callPool.address.CallPool,
                    user: networkAccount,
                    tokenId,
                  })
                }}
              />
            </Stack>
            <Box>
              <Button
                disabled={loading}
                onClick={() => {
                  withdraw({
                    callPool: callPool.address.CallPool,
                    user: networkAccount,
                    tokenId,
                  })
                }}
              >
                Withdraw
              </Button>
            </Box>
          </FlexBetween>
        )
      case 'Called':
        debugger
        return (
          <FlexBetween>
            <Stack spacing={1}>
              <Tiny>Strike Price</Tiny>
              <Stack spacing={1} direction="row" alignItems="center">
                <TokenIcon symbol="ETH" sx={{ width: 16, height: 16 }} />
                <NumberDisplay value={weiToValue(position.strikePrice, 18)} />
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <Tiny>Premium Earned</Tiny>
              <Stack spacing={1} direction="row" alignItems="center">
                <TokenIcon symbol="ETH" sx={{ width: 16, height: 16 }} />
                <NumberDisplay value={weiToValue(position.premiumToOwner, 18)} />
              </Stack>
            </Stack>
          </FlexBetween>
        )
      default:
        return null
    }
  }, [
    callPool.address.CallPool,
    loading,
    networkAccount,
    position.premiumToOwner,
    position.strikePrice,
    relistNFT,
    status,
    takeNFTOffMarket,
    tokenId,
    withdraw,
  ])

  if (status === 'Removed') return null
  const title = `${safeGet(() => nftAssetsData.contractName) || ''} #${tokenId}`

  return (
    <Root>
      <NFTIcon nftAssetsData={nftAssetsData} sx={{ padding: 1.5 }} />
      <CardContent>
        <Stack spacing={1}>
          <Paragraph>{title}</Paragraph>
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
    </Root>
  )
}

export default NFTCard
