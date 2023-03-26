import { m } from 'framer-motion'
import { useMemo } from 'react'

import type { BoxProps } from '@mui/material/Box'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import { styled } from '@mui/material/styles'
import type { SxProps, Theme } from '@mui/material/styles'

import { imagePlaceholder } from 'store/nft/tokenId/assets/adapter/getAssetsBaseData'
import type { AssetsData } from 'store/nft/tokenId/assets/adapter/getAssetsData'

import { useNFTAssetsData } from '../hooks/useNFTAssetsData'
import type { BaseNFT } from '../types'

const ImageBox = (props: BoxProps<'img'>) => <Box {...props} component="img" />

const ROOT = styled(Box)`
  width: 100%;
`
const ImageWrap = styled(Box)`
  overflow: hidden;
  border-radius: 8px;
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  position: relative;
`
const Image = styled(ImageBox)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`
const Loading = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BaseNFTIcon = ({ nft, sx }: NFTIconProps) => {
  const { nftAssetsData } = useNFTAssetsData(nft)
  return <NFTAssetsDataIcon nftAssetsData={nftAssetsData} sx={sx} />
}
const NFTAssetsDataIcon = ({ nftAssetsData, sx }: NFTIconProps) => {
  const image = useMemo(() => {
    if (!nftAssetsData)
      return (
        <Loading>
          <CircularProgress size={36} />
        </Loading>
      )
    const { contractName, token_id, image_thumbnail_url } = nftAssetsData
    const isImagePlaceholder = image_thumbnail_url === imagePlaceholder
    return (
      <Image
        src={image_thumbnail_url}
        alt={`${contractName} #${token_id}`}
        sx={{
          backgroundColor: isImagePlaceholder ? 'white' : 'unset',
        }}
      />
    )
  }, [nftAssetsData])

  return (
    <ROOT sx={sx}>
      <ImageWrap>
        <m.div whileHover={{ scale: 1.2 }}>
          <ImageWrap>{image}</ImageWrap>
        </m.div>
      </ImageWrap>
    </ROOT>
  )
}

export type NFTIconProps = {
  nftAssetsData?: AssetsData
  nft?: BaseNFT
  sx?: SxProps<Theme>
}
const NFTIcon = (props: NFTIconProps) => {
  const { nft, sx } = props
  if (nft) return <BaseNFTIcon nft={nft} sx={sx} />
  return <NFTAssetsDataIcon {...props} />
}

export default NFTIcon
