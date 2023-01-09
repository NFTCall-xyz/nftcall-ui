import { createContext } from 'app/utils/createContext'
import { log } from 'app/utils/dev'
import { useMemo } from 'react'
import { useCallPools } from '..'
import { useCallPoolId } from './application/callPoolId'

const useCallPoolDetailsService = () => {
  const { callPools } = useCallPools()
  const callPoolId = useCallPoolId()
  const callPool = useMemo(() => {
    const returnValue = callPools.find(
      (callPool) => callPool.address.CallPool.toLowerCase() === callPoolId.value.toLowerCase()
    )
    log('[CallPoolDetailsService]', returnValue)
    return returnValue
  }, [callPoolId.value, callPools])
  return {
    callPool,
    callPoolId,
  }
}
const { Provider: CallPoolDetailsProvider, createUseContext } = createContext(useCallPoolDetailsService)
export const createCallPoolDetailsContext = createUseContext

export default CallPoolDetailsProvider
