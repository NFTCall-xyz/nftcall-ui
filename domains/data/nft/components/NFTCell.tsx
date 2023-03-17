import Stack from '@mui/material/Stack'
import type { SxProps, Theme } from '@mui/material/styles'

import { Paragraph, Span } from 'components/Typography'

import type { AssetsData } from 'store/nft/tokenId/assets/adapter/getAssetsData'

import { useNFTAssetsData } from '../hooks/useNFTAssetsData'
import type { BaseNFT } from '../types'
import CollectionName from './CollectionName'
import NFTIcon from './NFTIcon'

export type NFTCellProps = {
  nftAssetsData?: AssetsData
  nft?: BaseNFT
  sx?: SxProps<Theme>
}
const NFTCell = (props: NFTCellProps) => {
  const { nft, sx } = props
  const { nftAssetsData } = useNFTAssetsData(nft)
  const { contractName } = nftAssetsData || ({} as undefined)
  return (
    <Stack spacing={1} direction="row">
      <NFTIcon nftAssetsData={nftAssetsData} sx={sx} />
      <Stack alignItems="start" textAlign="left">
        <Paragraph>#{nft.tokenId}</Paragraph>
        <CollectionName
          component={Span}
          color="text.secondary"
          name={contractName}
          width={{ lg: 100, md: 80, sm: 150, xs: 150 }}
        />
      </Stack>
    </Stack>
  )
}

export default NFTCell
