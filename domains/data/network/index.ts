import { useMemo } from 'react'

import { createContextWithProvider } from 'app/utils/createContext'

import { getMarkets } from './adapter/markets'
import { useAddress } from './application/address'
import { useContracts } from './application/contracts'
import { useThegraphUrl } from './application/thegraphUrl'

const useNetworkService = () => {
  const address = useAddress()
  const markets = useMemo(() => getMarkets(address), [address])
  const contracts = useContracts()
  const thegraphUrl = useThegraphUrl()

  return {
    address,
    markets,
    contracts,
    thegraphUrl,
  }
}
const { Provider: NetworkProvider, createUseContext } = createContextWithProvider(useNetworkService)
export const createNetworkContext = createUseContext

export default NetworkProvider
