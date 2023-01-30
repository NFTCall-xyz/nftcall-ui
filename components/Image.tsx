import RcImage from 'rc-image'
import type { FC } from 'react'

import {
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CloseOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
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
