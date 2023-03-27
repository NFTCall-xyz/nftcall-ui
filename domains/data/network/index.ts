import { useMemo } from 'react'

import { createContextWithProvider } from 'app/utils/createContext'

import { getMarkets } from './adapter/markets'
import { useAddress } from './application/address'
import { useContracts } from './application/contracts'
import { useProvider } from './application/provider'
import { useThegraphUrl } from './application/thegraphUrl'

const useNetworkService = () => {
  const address = useAddress()
  const markets = useMemo(() => getMarkets(address), [address])
  const provider = useProvider()
  const contracts = useContracts(provider)
  const thegraphUrl = useThegraphUrl()

  return {
    address,
    markets,
    provider,
    contracts,
    thegraphUrl,
  }
}
const { Provider: NetworkProvider, createUseContext } = createContextWithProvider(useNetworkService)
export const createNetworkContext = createUseContext

export default NetworkProvider
