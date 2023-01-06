import type { FC } from 'react'
import CircleIcon from '@mui/icons-material/FiberManualRecordRounded'

interface ChainIconProps {
  chainName: string
}

export const ChainIcon: FC<ChainIconProps> = ({ chainName }) => {
  const getNetworkIcon = (name: string) => {
    switch (name) {
      case 'Goerli':
        return <CircleIcon fontSize="small" sx={{ color: '#f6c343' }} />
      default:
        return <CircleIcon fontSize="small" sx={{ color: 'grey' }} />
    }
  }

  return getNetworkIcon(chainName)
}

export default ChainIcon
