import type { FC } from 'react'
import { useMemo } from 'react'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import { safeGet } from 'app/utils/get'

import { Paragraph, Span } from 'components/Typography'

import NFTIcon from 'domains/data/nft/components/NFTIcon'
import { useNFTAssetsData } from 'domains/data/nft/hooks/useNFTAssetsData'
import type { BaseNFT } from 'domains/data/nft/types'

export type WalletNFT = BaseNFT & {
  callPoolAddress: string
}

export type NFTCardProps = WalletNFT &
  Partial<{
    action: { name?: string; onClick?: any; disabled?: boolean; tip?: any }
  }>

const ROOT = styled(Card)(({ theme }) => ({
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

const NFTCard: FC<NFTCardProps> = (props: NFTCardProps) => {
  const { tokenId, action } = props
  const { nftAssetsData } = useNFTAssetsData(props)

  const actions = useMemo(() => {
    if (!action) return null
    const { tip, disabled, onClick, name } = action
    if (tip) return tip

    return (
      <Button variant="contained" size="small" disabled={disabled} onClick={() => onClick(props)}>
        {name}
      </Button>
    )
  }, [action, props])
  const title = '#' + tokenId
  const collection = safeGet(() => nftAssetsData.contractName) || ''

  return (
    <ROOT>
      <NFTIcon nftAssetsData={nftAssetsData} sx={{ padding: 1.5 }} />
      <CardContent sx={{ padding: 2, paddingTop: 0 }}>
        <Stack>
          <Paragraph>{title}</Paragraph>
          <Span color="text.secondary">{collection}</Span>
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
