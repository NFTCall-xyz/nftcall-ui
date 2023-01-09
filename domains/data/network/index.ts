import { createContext } from 'app/utils/createContext'
import { useMemo } from 'react'
import { getMarkets } from './adapter/markets'
import { useAddress } from './application/address'
import { useProvider } from './application/provider'
import { useContracts } from './application/contracts'

const useNetworkService = () => {
  const address = useAddress()
  const markets = useMemo(() => getMarkets(address), [address])
  const provider = useProvider()
  const contracts = useContracts(provider)

  return { address, markets, provider, contracts, subgraphName: 'rockgold0911/nftcall' }
}
const { Provider: NetworkProvider, createUseContext } = createContext(useNetworkService)
export const createNetworkContext = createUseContext

export default NetworkProvider
