import type { FC } from 'react'
import { useMemo } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { useNFT } from 'domains/data'
import type { BaseNFT } from 'domains/data/nft/types'
import { Paragraph } from 'components/Typography'
import Stack from '@mui/material/Stack'

export type WalletNFT = BaseNFT & {
  callPoolAddress: string
}

export type NFTCardProps = WalletNFT &
  Partial<{
    action: { name?: string; onClick?: any; disabled?: boolean; tip?: any }
  }>

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

const NFTCard: FC<NFTCardProps> = (props: NFTCardProps) => {
  const { tokenId, nftAddress, action } = props
  const {
    tokenId: { assets },
  } = useNFT()
  const nft = useMemo(() => {
    return assets.find((i) => i.token_id === tokenId && i.nftAddress === nftAddress)
  }, [assets, nftAddress, tokenId])

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
  if (!nft) return <p>loading</p>
  const { token_id, image_thumbnail_url } = nft
  const title = '#' + token_id
  return (
    <Root>
      <CardMedia component="img" height="auto" image={image_thumbnail_url} alt={title} sx={{ padding: 1.5 }} />
      <CardContent sx={{ padding: 2, paddingTop: 0 }}>
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
