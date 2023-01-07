import { createContext } from 'app/utils/createContext'
import { usePageProgressController } from 'lib/nprogress/store/nprogress'
import { useNftOracleController } from 'store/nftcallProtocol/nftOracle/useNftOracleController'

export const useControllersService = () => {
  const pageProcess = usePageProgressController()
  const nft = useNftOracleController()
  return { pageProcess, nft }
}

const { Provider: ControllersProvider, createUseContext } = createContext(useControllersService)

export const createControllersContext = createUseContext
export default ControllersProvider
