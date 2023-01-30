import type { FC } from 'react'
import { useMemo } from 'react'

import DeleteIcon from '@mui/icons-material/Delete'
import { Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'

import { Paragraph } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import NFTIcon from 'domains/data/nft/components/NFTIcon'
import { useNFTAssetsData } from 'domains/data/nft/hooks/useNFTAssetsData'

import type { ListedNFT } from '../NFTCard'

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

  const invalidated = !listedNFT

  return (
    <ROOT>
      <FlexBetween>
        <Stack direction="row" alignItems="center" spacing={2}>
          {invalidated ? (
            <Box sx={{ width: 40, height: 40 }}>invalidated</Box>
          ) : (
            <NFTIcon nftAssetsData={nftAssetsData} sx={{ width: 40, height: 40 }} />
          )}

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
