import { createContext } from 'app/utils/createContext'
import { useCollections } from './application/collections'

const useNFTService = () => {
  const collections = useCollections()
  return { collections }
}
const { Provider: NFTProvider, createUseContext } = createContext(useNFTService)
export const createNFTContext = createUseContext

export default NFTProvider
