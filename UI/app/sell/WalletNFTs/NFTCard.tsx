import type { FC } from 'react'
import { useMemo } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import { useNFT } from 'domains/data'

export type NFT = {
  tokenId: string
  nftAddress: string
}

export type WalletNFT = NFT & {
  callPoolAddress: string
}

export type NFTCardProps = WalletNFT &
  Partial<{
    action: { name?: string; onClick?: any; disabled?: boolean; tip?: any }
  }>

const Root = styled(Card)`
  width: 230px;
  position: relative;
  .checkbox {
    position: absolute;
    right: 0;
    top: 0;
  }
`

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
      <Button variant="outlined" disabled={disabled} onClick={() => onClick(props)}>
        {name}
      </Button>
    )
  }, [action, props])
  if (!nft) return <p>loading</p>
  const { token_id, image_thumbnail_url } = nft
  const title = '#' + token_id
  return (
    <Root>
      <CardMedia component="img" height="200" image={image_thumbnail_url} alt={title} />
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
        {actions}
      </CardActions>
    </Root>
  )
}

export default NFTCard
