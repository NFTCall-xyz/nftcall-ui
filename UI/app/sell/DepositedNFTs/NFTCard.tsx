import type { FC } from 'react'
import { useState } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useCallPools, useNetwork, useNFT } from 'domains/data'
import { useWallet } from 'domains'
import { transaction } from 'domains/controllers/adapter/transaction'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import type { RelistNFTProps, TakeNFTOffMarketProps, WithdrawProps } from 'lib/protocol/typechain/nftcall'
import Stack from '@mui/material/Stack'
import FlexBetween from 'components/flexbox/FlexBetween'
import Switch from '@mui/material/Switch'
import type { DepositedNFTStatus } from './useDepositedNFTs/request'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

export type DepositedNFT = {
  minStrikePrice: number
  maxExpriyTime: number
  nftAddress: string
  tokenId: string
  status: DepositedNFTStatus
}

export type NFTCardProps = Partial<DepositedNFT>

const Root = styled(Card)`
  width: 230px;
  position: relative;
  .checkbox {
    position: absolute;
    right: 0;
    top: 0;
  }
`

const NFTCard: FC<NFTCardProps> = ({ tokenId, nftAddress, status: sourceStatus }) => {
  const [status, setStatus] = useState(sourceStatus)
  const [loading, setLoading] = useState(false)
  const {
    tokenId: { assets },
  } = useNFT()
  const nft = useMemo(() => {
    return assets.find((i) => i.token_id === tokenId && i.nftAddress === nftAddress)
  }, [assets, nftAddress, tokenId])
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

  if (status === 'Removed') return null
  if (!nft) return <p>loading</p>
  const { token_id, image_thumbnail_url, contractName } = nft
  const title = `${contractName} #${token_id}`
  const isListed = status === 'Listed'

  return (
    <Root>
      <CardMedia component="img" height="200" image={image_thumbnail_url} alt={`#${token_id}`} />
      <CardContent>
        <Typography gutterBottom variant="body2" component="div">
          {title}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          justifyContent: 'center',
          padding: 2,
        }}
      >
        <FlexBetween>
          <Stack spacing={1}>
            <p>List on Market</p>
            <Switch
              checked={isListed}
              disabled={loading}
              onChange={() => {
                if (isListed) {
                  takeNFTOffMarket({
                    callPool: callPool.address.CallPool,
                    user: networkAccount,
                    tokenId,
                  })
                } else {
                  relistNFT({
                    callPool: callPool.address.CallPool,
                    user: networkAccount,
                    tokenId,
                  })
                }
              }}
            />
          </Stack>
          <Box>
            {!isListed && (
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
            )}
          </Box>
        </FlexBetween>
      </CardActions>
    </Root>
  )
}

export default NFTCard
