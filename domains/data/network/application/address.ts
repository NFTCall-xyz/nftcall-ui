import { useWallet } from 'domains'
import { getAddress } from 'lib/protocol/market'
import { useMemo } from 'react'

export const useAddress = () => {
  const { chainId } = useWallet()
  const address = useMemo(() => getAddress(chainId), [chainId])

  return address
}
