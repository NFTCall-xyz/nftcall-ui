import type { BoxProps } from '@mui/material/Box'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import type { SxProps, Theme } from '@mui/material/styles'
import type { AssetsData } from 'store/nft/tokenId/assets/adapter/getAssetsData'
import { useMemo } from 'react'
import CircularProgress from '@mui/material/CircularProgress'

export interface NFTIconProps {
  nftAssetsData: AssetsData
  sx?: SxProps<Theme>
}

const ImageBox = (props: BoxProps<'img'>) => <Box {...props} component="img" />

const ROOT = styled(Box)`
  width: 100%;
`
const ImageWrap = styled(Box)`
  overflow: hidden;
  background-color: white;
  border-radius: 10px;
  width: 100%;
  height: 0px;
  padding-bottom: 100%;
  position: relative;
`
const Image = styled(ImageBox)`
  width: 100%;
  height: 100%;
  position: absolute;
`
const Loading = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

const NFTIcon = ({ nftAssetsData, sx }: NFTIconProps) => {
  const image = useMemo(() => {
    if (!nftAssetsData)
      return (
        <Loading>
          <CircularProgress />
        </Loading>
      )
    const { contractName, token_id, image_thumbnail_url } = nftAssetsData
    return <Image src={image_thumbnail_url} alt={`${contractName} #${token_id}`} />
  }, [nftAssetsData])

  return (
    <ROOT sx={sx}>
      <ImageWrap>{image}</ImageWrap>
    </ROOT>
  )
}

export default NFTIcon
