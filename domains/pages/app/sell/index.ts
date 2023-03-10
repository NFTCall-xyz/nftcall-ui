import { createContextWithProvider } from 'app/utils/createContext'

import { useUserStats } from 'domains/data/callPools/hooks/useUserStats'

import { useSellStats } from './application/sellStats'

const usePageEffect = () => {
  useUserStats()
}

const useSellService = () => {
  const stats = useSellStats()
  return { stats, usePageEffect }
}
const { Provider: SellProvider, createUseContext } = createContextWithProvider(useSellService)
export const createSellContext = createUseContext

export default SellProvider
