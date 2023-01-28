import WalletProvider, { createWalletContext } from 'lib/protocol/components/wallet'

import ControllersProvider, { createControllersContext } from './controllers'
import UtilsProvider from './utils'
import DataProvider from './data'
import PagesProvider from './pages'

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
