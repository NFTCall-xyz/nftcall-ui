import type { FC } from 'react'
import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import { useNFT } from 'domains/data'
import type { ListedNFT } from '../NFTCard'
import DeleteIcon from '@mui/icons-material/Delete'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'
import { H3, Paragraph } from 'components/Typography'

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
  const { nftAddress } = listedNFT
  const {
    tokenId: { assets },
  } = useNFT()
  const nft = useMemo(() => {
    return assets.find((i) => i.token_id === tokenId && i.nftAddress === nftAddress)
  }, [assets, nftAddress, tokenId])

  if (!nft) return <p>loading</p>
  const { token_id, image_thumbnail_url, contractName } = nft
  const title = `#${token_id}`

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
