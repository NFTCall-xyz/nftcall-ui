import { useMemo } from 'react'

import { createContextWithProvider } from 'app/utils/createContext'
import { useWhyDidYouUpdate } from 'app/utils/dev/hooks/useWhyDidYouUpdate'
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
  const callPool: CallPoolDetail = useMemo(() => {
    if (!callPoolId.value) return undefined
    const callPool = callPools.find(
      (callPool) => callPool.address.CallPool.toLowerCase() === callPoolId.value.toLowerCase()
    )
    if (!callPool) return undefined
    const premiums =
      safeGet(() => storeData.previewOpenCall.find((i) => i.callPool === callPool.address.CallPool).premiums) ||
      ([] as undefined)

    return {
      ...callPool,
      premiums,
    }
  }, [callPoolId.value, callPools, storeData.previewOpenCall])

  useWhyDidYouUpdate('[CallPoolDetailsService]', callPool)

  return {
    callPool,
    callPoolId,
  }
}
const { Provider: CallPoolDetailsProvider, createUseContext } = createContextWithProvider(useCallPoolDetailsService)
export const createCallPoolDetailsContext = createUseContext

export default CallPoolDetailsProvider
