import { createContext } from 'app/utils/createContext'
import { usePageProgressController } from 'lib/nprogress/store/nprogress'
import { useNFTOracleController } from 'store/nftcallProtocol/nftOracle/useNFTOracleController'

export const useControllersService = () => {
  const pageProcess = usePageProgressController()
  const nft = useNFTOracleController()
  return { pageProcess, nft }
}

const { Provider: ControllersProvider, createUseContext } = createContext(useControllersService)

export const createControllersContext = createUseContext
export default ControllersProvider
