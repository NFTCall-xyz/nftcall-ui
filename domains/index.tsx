import WalletProvider, { createWalletContext } from 'lib/protocol/components/wallet'

import UtilsProvider from './utils'
import DataProvider from './data'
import ControllersProvider, { createControllersContext } from './controllers'

const Provider: FCC = ({ children }) => {
  return (
    <WalletProvider>
      <UtilsProvider>
        <ControllersProvider>
          <DataProvider>{children}</DataProvider>
        </ControllersProvider>
      </UtilsProvider>
    </WalletProvider>
  )
}

export default Provider

export const useWallet = createWalletContext()
export const useControllers = createControllersContext()
