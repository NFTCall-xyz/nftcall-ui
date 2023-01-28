import { createContext } from 'app/utils/createContext'
import { useMemo } from 'react'

const useBuyService = () => {
  return {}
}
const { Provider: BuyProvider, createUseContext } = createContext(useBuyService)
export const createBuyContext = createUseContext

export default BuyProvider
