import type { SxProps, Theme } from '@mui/material/styles'
import type { AssetsData } from 'store/nft/tokenId/assets/adapter/getAssetsData'
import type { BaseNFT } from '../types'
import Stack from '@mui/material/Stack'
import NFTIcon from './NFTIcon'
import { Paragraph, Span } from 'components/Typography'
import { useNFTAssetsData } from '../hooks/useNFTAssetsData'

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
      <Stack alignItems="start">
        <Paragraph>#{nft.tokenId}</Paragraph>
        <Span color="text.secondary">{contractName}</Span>
      </Stack>
    </Stack>
  )
}

export default NFTCell
