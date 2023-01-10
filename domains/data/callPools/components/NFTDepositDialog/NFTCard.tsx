import type { FC } from 'react'
import { useMemo } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import { useNFT } from 'domains/data'
import type { BaseNFT } from 'domains/data/nft/types'
import { H3, Paragraph } from 'components/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

export type NFTCardProps = BaseNFT

const ROOT = styled(Card)`
  width: 100%;
`

const NFTCard: FC<NFTCardProps> = (props: NFTCardProps) => {
  const { tokenId, nftAddress } = props
  const {
    tokenId: { assets },
  } = useNFT()
  const nft = useMemo(() => {
    return assets.find((i) => i.token_id === tokenId && i.nftAddress === nftAddress)
  }, [assets, nftAddress, tokenId])

  if (!nft) return <p>loading</p>
  const { token_id, image_thumbnail_url, contractName } = nft
  const title = '#' + token_id
  return (
    <ROOT>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Box component="img" src={image_thumbnail_url} alt={title} height={'100%'} width={'100%'} />
        </Grid>
        <Grid item xs={9}>
          <Stack spacing={2}>
            <H3>{contractName}</H3>
            <Paragraph>{title}</Paragraph>
          </Stack>
        </Grid>
      </Grid>
    </ROOT>
  )
}

export default NFTCard
