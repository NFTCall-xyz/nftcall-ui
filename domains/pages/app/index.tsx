import BuyProvider, { createBuyContext } from './buy'
import FaucetsProvider, { createFaucetsContext } from './faucets'
import SellProvider, { createSellContext } from './sell'

const Provider: FCC = ({ children }) => {
  return (
    <BuyProvider>
      <FaucetsProvider>
        <SellProvider>{children}</SellProvider>
      </FaucetsProvider>
    </BuyProvider>
  )
}

export default Provider

export const useAppBuy = createBuyContext()
export const useAppFaucets = createFaucetsContext()
export const useAppSell = createSellContext()
