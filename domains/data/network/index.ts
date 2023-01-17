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

  return {
    address,
    markets,
    provider,
    contracts,
    subgraphName: 'https://api.thegraph.com/subgraphs/name/rockgold0911/nftcall',
    // subgraphName:
    //   'https://gateway.testnet.thegraph.com/api/693f585e54ce023909dcce542bb2ef6a/subgraphs/id/8psvhQk9V2oy1FBh8hJ6eTCPth8ffaf2x18Vz3vU1nTN',
  }
}
const { Provider: NetworkProvider, createUseContext } = createContext(useNetworkService)
export const createNetworkContext = createUseContext

export default NetworkProvider
