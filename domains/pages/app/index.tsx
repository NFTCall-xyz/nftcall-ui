import BuyProvider, { createBuyContext } from './buy'
import SellProvider, { createSellContext } from './sell'

const Provider: FCC = ({ children }) => {
  return (
    <BuyProvider>
      <SellProvider>{children}</SellProvider>
    </BuyProvider>
  )
}

export default Provider

export const useAppBuy = createBuyContext()
export const useAppSell = createSellContext()
