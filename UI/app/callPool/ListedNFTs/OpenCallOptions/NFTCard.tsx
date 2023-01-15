import type { FC } from 'react'
import { useMemo } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import type { ListedNFT } from '../NFTCard'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import { Paragraph } from 'components/Typography'
import { useNFTAssetsData } from 'domains/data/nft/hooks/useNFTAssetsData'
import NFTIcon from 'domains/data/nft/components/NFTIcon'
import FlexBetween from 'components/flexbox/FlexBetween'
import { Stack } from '@mui/material'

export type NFTCardProps = {
  tokenId: string
  data: ListedNFT[]
  onCheckChange: any
}

const ROOT = styled(Card)`
  width: 100%;
`

const NFTCard: FC<NFTCardProps> = ({ data, tokenId, onCheckChange }) => {
  const listedNFT = useMemo(() => data.find((nft) => nft.tokenId === tokenId), [data, tokenId])
  const { nftAssetsData } = useNFTAssetsData(listedNFT)
  const title = `#${tokenId}`

  return (
    <ROOT>
      <FlexBetween>
        <Stack direction='row' alignItems='center' spacing={2}>
          <NFTIcon nftAssetsData={nftAssetsData} sx={{ width: 40, height: 40 }}/>
          <Paragraph>{title}</Paragraph>
        </Stack>
        <IconButton
            onClick={() => {
              onCheckChange(tokenId, false)
            }}
          >
            <DeleteIcon />
        </IconButton>
      </FlexBetween>
    </ROOT>
  )
}

export default NFTCard
