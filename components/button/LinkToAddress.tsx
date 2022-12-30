import type { FC } from 'react'
import { useMemo } from 'react'
import Button from '@mui/material/Button'
import { safeGet } from 'app/utils/get'
import { textCenterEllipsis } from 'app/utils/string/text-center-ellipsis'
import { useWallet } from 'domains'

type LinkToAddressProps = {
  name?: string
  address: string
}

const LinkToAddress: FC<LinkToAddressProps> = ({ address, name }) => {
  const { network } = useWallet()
  const linkTo = useMemo(() => {
    return safeGet(() => `${network.explorerUrl}/search?f=0&q=${address}`) || '#'
  }, [address, network?.explorerUrl])
  return (
    <Button variant="text" href={linkTo} target="_blank" color="primary">
      {name || textCenterEllipsis(address)}
    </Button>
  )
}

export default LinkToAddress
