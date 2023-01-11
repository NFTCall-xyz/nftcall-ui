import type { FC } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import type { BaseNFT } from 'domains/data/nft/types'
import { H3, Paragraph } from 'components/Typography'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { useNFTAssetsData } from 'domains/data/nft/hooks/useNFTAssetsData'

export type NFTCardProps = BaseNFT

const ROOT = styled(Card)`
  width: 100%;
`

const NFTCard: FC<NFTCardProps> = (props: NFTCardProps) => {
  const { nftAssetsData } = useNFTAssetsData(props)

  if (!nftAssetsData) return <p>loading</p>
  const { image_thumbnail_url, contractName } = nftAssetsData
  const title = '#' + props.tokenId
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
