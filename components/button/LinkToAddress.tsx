import type { FC } from 'react'
import { useMemo } from 'react'
import Button from '@mui/material/Button'
import { safeGet } from 'app/utils/get'
import { textCenterEllipsis } from 'app/utils/string/text-center-ellipsis'
import { useWallet } from 'domains'

type LinkToAddressProps = {
  address: string
}

const LinkToAddress: FC<LinkToAddressProps> = ({ address }) => {
  const { network } = useWallet()
  const linkTo = useMemo(() => {
    return safeGet(() => `${network.explorerUrl}/search?f=0&q=${address}`) || '#'
  }, [address, network?.explorerUrl])
  return (
    <Button variant="text" href={linkTo} target="_blank" color="primary">
      {textCenterEllipsis(address)}
    </Button>
  )
}

export default LinkToAddress
