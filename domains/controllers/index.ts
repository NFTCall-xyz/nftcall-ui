import { createContext } from 'app/utils/createContext'
import { usePageProgressController } from 'lib/nprogress/store/nprogress'
import { useOracleController } from 'store/oracle/useOracleController'
import { useTokenIdController } from 'store/nft/tokenId/useTokenIdController'
import { useUserController } from 'store/user/useUserController'
import { useCallPoolController } from 'store/callPool/useCallPoolController'

export const useControllersService = () => {
  const pageProcess = usePageProgressController()
  const nft = useOracleController()
  const tokenId = useTokenIdController()
  const user = useUserController()
  const callPool = useCallPoolController()
  return { pageProcess, nft, tokenId, user, callPool }
}

const { Provider: ControllersProvider, createUseContext } = createContext(useControllersService)

export const createControllersContext = createUseContext
export default ControllersProvider
