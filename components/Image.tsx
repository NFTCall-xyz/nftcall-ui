import type { FC } from 'react'
import RcImage from 'rc-image'
import {
  RotateLeftOutlined,
  RotateRightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  CloseOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from '@mui/icons-material'

const previewIcons = {
  rotateLeft: <RotateLeftOutlined />,
  rotateRight: <RotateRightOutlined />,
  zoomIn: <ZoomInOutlined />,
  zoomOut: <ZoomOutOutlined />,
  close: <CloseOutlined />,
  left: <ArrowLeftOutlined />,
  right: <ArrowRightOutlined />,
}

export const PreviewImage: FC<{ src: string }> = ({ src }) => (
  <RcImage src={src} alt="" preview={{ icons: previewIcons }} />
)
