import { createContext } from 'app/utils/createContext'
import { useCallPools } from '..'

const useCallPoolDetailsService = () => {
  const { callPools } = useCallPools()
  const callPool = callPools[0]
  return {
    callPool,
  }
}
const { Provider: CallPoolDetailsProvider, createUseContext } = createContext(useCallPoolDetailsService)
export const createCallPoolDetailsContext = createUseContext

export default CallPoolDetailsProvider
