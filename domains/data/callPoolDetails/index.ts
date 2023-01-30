import { useMemo } from 'react'

import { createContext } from 'app/utils/createContext'
import { log } from 'app/utils/dev'
import { safeGet } from 'app/utils/get'

import type { PremiumData } from 'store/callPool/previewOpenCall/adapter/getPreviewOpenCallData'
import { useCallPoolStateData } from 'store/callPool/useCallPoolStateData'

import { useCallPools } from '..'
import type { CallPool } from '../callPools'
import { useCallPoolId } from './application/callPoolId'

export type CallPoolDetail = CallPool & {
  premiums: PremiumData[]
}

const useCallPoolDetailsService = () => {
  const storeData = useCallPoolStateData()
  const { callPools } = useCallPools()
  const callPoolId = useCallPoolId()
  const callPool = useMemo(() => {
    let returnValue: CallPoolDetail = {} as any
    if (!callPoolId.value) return undefined
    const callPool = callPools.find(
      (callPool) => callPool.address.CallPool.toLowerCase() === callPoolId.value.toLowerCase()
    )
    if (!callPool) return undefined
    const premiums =
      safeGet(() => storeData.previewOpenCall.find((i) => i.callPool === callPool.address.CallPool).premiums) ||
      ([] as undefined)

    returnValue = {
      ...callPool,
      premiums,
    }
    log('[CallPoolDetailsService]', returnValue)
    return returnValue
  }, [callPoolId.value, callPools, storeData.previewOpenCall])

  return {
    callPool,
    callPoolId,
  }
}
const { Provider: CallPoolDetailsProvider, createUseContext } = createContext(useCallPoolDetailsService)
export const createCallPoolDetailsContext = createUseContext

export default CallPoolDetailsProvider
