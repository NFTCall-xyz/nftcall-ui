import BuyProvider, { createBuyContext } from './buy'

const Provider: FCC = ({ children }) => {
  return <BuyProvider>{children}</BuyProvider>
}

export default Provider

export const useAppBuy = createBuyContext()
