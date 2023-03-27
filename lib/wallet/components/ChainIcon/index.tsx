import type { FC } from 'react'

import CircleIcon from '@mui/icons-material/FiberManualRecordRounded'

import TokenIcon from 'lib/protocol/components/TokenIcon'

interface ChainIconProps {
  chainName: string
}

export const ChainIcon: FC<ChainIconProps> = ({ chainName }) => {
  const getNetworkIcon = (name: string) => {
    switch (name) {
      case 'Goerli':
        return <CircleIcon fontSize="small" sx={{ color: '#f6c343' }} />
      case 'Ethereum':
        return <TokenIcon symbol={'ETH'} sx={{ width: 16, height: 16 }} />
      default:
        return <CircleIcon fontSize="small" sx={{ color: 'grey' }} />
    }
  }

  return getNetworkIcon(chainName)
}

export default ChainIcon
