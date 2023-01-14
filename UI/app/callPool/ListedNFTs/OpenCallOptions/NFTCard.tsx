import type { FC } from 'react'
import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import type { ListedNFT } from '../NFTCard'
import DeleteIcon from '@mui/icons-material/Delete'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import { Paragraph } from 'components/Typography'
import { useNFTAssetsData } from 'domains/data/nft/hooks/useNFTAssetsData'
import NFTIcon from 'domains/data/nft/components/NFTIcon'

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
  const title = `#${tokenId}`

  return (
    <ROOT>
      <Grid container spacing={2}>
        <Grid item xs={2.5}>
          <NFTIcon nftAssetsData={nftAssetsData} />
        </Grid>
        <Grid
          item
          xs={7.5}
          sx={{
            alignItems: 'center',
            display: 'flex',
          }}
        >
          <Paragraph>{title}</Paragraph>
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
