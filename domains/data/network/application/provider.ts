import { useWallet } from 'domains'
import { useMemo } from 'react'

import type { AddressData } from 'lib/protocol/market'
import { getProvider } from 'lib/protocol/provider'
import type { Provider } from 'lib/protocol/provider/common-static-json-rpc-provider'

export const useProvider = (address: AddressData) => {
  const { ethereum, network } = useWallet()
  const provider: Provider = useMemo(
    () => (network && ethereum ? ethereum : getProvider(address.chainId)),
    [address.chainId, ethereum, network]
  )
  return provider
}
