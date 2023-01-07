import { createContext } from 'app/utils/createContext'
import { useCollections } from './application/collections'
import { useOracle } from './application/oracle'

const useNFTService = () => {
  const collections = useCollections()
  const oracle = useOracle()
  return { collections, oracle }
}
const { Provider: NFTProvider, createUseContext } = createContext(useNFTService)
export const createNFTContext = createUseContext

export default NFTProvider
