import WalletProvider, { createWalletContext } from 'lib/wallet'

import ControllersProvider, { createControllersContext } from './controllers'
import DataProvider from './data'
import PagesProvider from './pages'
import UtilsProvider from './utils'

const Provider: FCC = ({ children }) => {
  return (
    <WalletProvider>
      <UtilsProvider>
        <ControllersProvider>
          <DataProvider>
            <PagesProvider>{children}</PagesProvider>
          </DataProvider>
        </ControllersProvider>
      </UtilsProvider>
    </WalletProvider>
  )
}

export default Provider

export const useWallet = createWalletContext()
export const useControllers = createControllersContext()
