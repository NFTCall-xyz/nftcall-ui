import type { FC } from 'react'
import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import type { ListedNFT } from '../NFTCard'
import DeleteIcon from '@mui/icons-material/Delete'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { H3, Paragraph } from 'components/Typography'
import { useNFTAssetsData } from 'domains/data/nft/hooks/useNFTAssetsData'

export type NFTCardProps = {
  tokenId: string
  data: ListedNFT[]
  onCheckChange: any
}

const ROOT = styled(Card)`
  width: 100%;
`

const NFTCard: FC<NFTCardProps> = ({ data, tokenId, onCheckChange }) => {
  const { t } = useTranslation()
  const listedNFT = useMemo(() => data.find((nft) => nft.tokenId === tokenId), [data, tokenId])
  const { nftAssetsData } = useNFTAssetsData(listedNFT)

  if (!nftAssetsData) return <p>loading</p>
  const { image_thumbnail_url, contractName } = nftAssetsData
  const title = `#${tokenId}`

  return (
    <ROOT>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          <Box component="img" src={image_thumbnail_url} alt={title} height={'100%'} width={'100%'} />
        </Grid>
        <Grid item xs={8}>
          <Stack spacing={1}>
            <H3>{contractName}</H3>
            <Paragraph>{title}</Paragraph>
          </Stack>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            onClick={() => {
              onCheckChange(tokenId, false)
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </ROOT>
  )
}

export default NFTCard
