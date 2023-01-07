import { createContext } from 'app/utils/createContext'
import { usePageProgressController } from 'lib/nprogress/store/nprogress'
import { useOracleController } from 'store/oracle/useOracleController'

export const useControllersService = () => {
  const pageProcess = usePageProgressController()
  const nft = useOracleController()
  return { pageProcess, nft }
}

const { Provider: ControllersProvider, createUseContext } = createContext(useControllersService)

export const createControllersContext = createUseContext
export default ControllersProvider
