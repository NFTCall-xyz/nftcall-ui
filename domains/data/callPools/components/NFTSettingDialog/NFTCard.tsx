import type { FC } from 'react'

import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import { safeGet } from 'app/utils/get'

import { H3 } from 'components/Typography'

import CollectionName from 'domains/data/nft/components/CollectionName'
import NFTIcon from 'domains/data/nft/components/NFTIcon'
import { useNFTAssetsData } from 'domains/data/nft/hooks/useNFTAssetsData'
import type { BaseNFT } from 'domains/data/nft/types'

export type NFTCardProps = BaseNFT

const ROOT = styled(Card)`
  width: 100%;
`

const NFTCard: FC<NFTCardProps> = (props: NFTCardProps) => {
  const { nftAssetsData } = useNFTAssetsData(props)
  const title = '#' + props.tokenId
  return (
    <ROOT>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <NFTIcon nftAssetsData={nftAssetsData} />
        </Grid>
        <Grid item xs={9}>
          <Stack spacing={2}>
            <H3>{title}</H3>
            <CollectionName color="text.secondary" name={safeGet(() => nftAssetsData.contractName)} />
          </Stack>
        </Grid>
      </Grid>
    </ROOT>
  )
}

export default NFTCard
