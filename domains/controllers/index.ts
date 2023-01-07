import { createContext } from 'app/utils/createContext'
import { usePageProgressController } from 'lib/nprogress/store/nprogress'
import { useOracleController } from 'store/oracle/useOracleController'
import { useTokenIdController } from 'store/nft/tokenId/useTokenIdController'

export const useControllersService = () => {
  const pageProcess = usePageProgressController()
  const nft = useOracleController()
  const tokenId = useTokenIdController()
  return { pageProcess, nft, tokenId }
}

const { Provider: ControllersProvider, createUseContext } = createContext(useControllersService)

export const createControllersContext = createUseContext
export default ControllersProvider
