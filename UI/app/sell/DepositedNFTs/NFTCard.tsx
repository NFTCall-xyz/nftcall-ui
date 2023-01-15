import type { FC } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import FlexBetween from 'components/flexbox/FlexBetween'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import type { BaseNFT, NFTActions, NFTStatus } from 'domains/data/nft/types'
import { Paragraph, Tiny } from 'components/Typography'
import { useNFTAssetsData } from 'domains/data/nft/hooks/useNFTAssetsData'
import NFTIcon from 'domains/data/nft/components/NFTIcon'
import { safeGet } from 'app/utils/get'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import { weiToValue } from 'lib/math'
import ListOnMarket from './ListOnMarket'

export type DepositedNFT = BaseNFT & {
  callPoolAddress: string
  minStrikePrice: number
  maxExpriyTime: number
  status: NFTStatus
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
  const { tokenId, status: sourceStatus, position } = props
  const { premiumToOwner, strikePrice } = position || ({} as undefined)
  const [status, setStatus] = useState(sourceStatus)
  const [loading, setLoading] = useState(false)
  const { nftAssetsData } = useNFTAssetsData(props)
  const nftActions = useMemo(() => {
    const returnValue: NFTActions = {
      setStatus,
      setLoading,
    }
    return returnValue
  }, [])

  const actions = useMemo(() => {
    switch (status) {
      case 'Listed':
        return (
          <FlexBetween>
            <Stack spacing={1}>
              <p>List on Market</p>
              <ListOnMarket checked={true} loading={loading} nft={props} nftActions={nftActions} />
            </Stack>
            <Box>
              <Button disabled={loading} variant="autoHide" onClick={() => {}}>
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
              <ListOnMarket checked={false} loading={loading} nft={props} nftActions={nftActions} />
            </Stack>
            <Box>
              <Button disabled={loading} variant="autoHide" onClick={() => {}}>
                Withdraw
              </Button>
            </Box>
          </FlexBetween>
        )
      case 'Called':
        return (
          <FlexBetween>
            <Stack spacing={1}>
              <Tiny>Strike Price</Tiny>
              <Stack spacing={1} direction="row" alignItems="center">
                <TokenIcon symbol="ETH" sx={{ width: 16, height: 16 }} />
                <NumberDisplay value={weiToValue(strikePrice, 18)} />
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <Tiny>Premium Earned</Tiny>
              <Stack spacing={1} direction="row" alignItems="center">
                <TokenIcon symbol="ETH" sx={{ width: 16, height: 16 }} />
                <NumberDisplay value={weiToValue(premiumToOwner, 18)} />
              </Stack>
            </Stack>
          </FlexBetween>
        )
      default:
        return null
    }
  }, [loading, nftActions, premiumToOwner, strikePrice, props, status])

  if (status === 'Removed') return null
  const title = `${safeGet(() => nftAssetsData.contractName) || ''} #${tokenId}`

  return (
    <ROOT>
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
    </ROOT>
  )
}

export default NFTCard
