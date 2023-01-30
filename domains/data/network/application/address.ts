import { useWallet } from 'domains'
import { useMemo } from 'react'

import { getAddress } from 'lib/protocol/market'

export const useAddress = () => {
  const { chainId } = useWallet()
  const address = useMemo(() => getAddress(chainId), [chainId])

  return address
}
