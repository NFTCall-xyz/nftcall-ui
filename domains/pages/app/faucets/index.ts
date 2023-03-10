import { createContextWithProvider } from 'app/utils/createContext'

import { useCallPools } from 'domains/data'

const usePageEffect = () => {}

const useFaucetsCallPools = () => {
  const { callPools } = useCallPools()
  return callPools
}

const useFaucetsService = () => {
  const callPools = useFaucetsCallPools()
  return {
    callPools,
    usePageEffect,
  }
}
const { Provider: FaucetsProvider, createUseContext } = createContextWithProvider(useFaucetsService)
export const createFaucetsContext = createUseContext

export default FaucetsProvider
