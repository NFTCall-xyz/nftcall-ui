import { createContext } from 'app/utils/createContext'
import { log } from 'app/utils/dev'
import { useMemo } from 'react'
import type { OracleData } from 'store/nftcallProtocol/nftOracle/oracle/adapter/getOracleData'
import { useNetwork, useNFT } from '..'
import type { Market } from '../network/adapter/markets'
import type { BaseCollection } from '../nft/application/collections/adapter/getCollection'

export type CallPool = Market & {
  collection: BaseCollection
  // depositedItems: number
  oracle: OracleData
}

const useCallPoolsService = () => {
  const { markets } = useNetwork()
  const { oracle, collections } = useNFT()

  const callPools = useMemo(() => {
    const returnValue = markets.map((market) => {
      const { id, address } = market
      const oracleData = oracle.find((i) => i.nft === address.NFT) || ({} as any)
      const collection = collections[id]
      return {
        ...market,
        collection,
        oracle: oracleData,
      } as CallPool
    })
    log('[CallPools]', returnValue)
    return returnValue
  }, [collections, markets, oracle])

  return callPools
}
const { Provider: CallPoolsProvider, createUseContext } = createContext(useCallPoolsService)
export const createCallPoolsContext = createUseContext

export default CallPoolsProvider
