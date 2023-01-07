import { createContext } from 'app/utils/createContext'
import { useCollections } from './application/collections'
import { useOracle } from './application/oracle'
import { useTokendId } from './application/tokenId'

const useNFTService = () => {
  const collections = useCollections()
  const oracle = useOracle()
  const tokenId = useTokendId()
  return { collections, oracle, tokenId }
}
const { Provider: NFTProvider, createUseContext } = createContext(useNFTService)
export const createNFTContext = createUseContext

export default NFTProvider
