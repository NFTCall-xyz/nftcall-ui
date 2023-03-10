import { useEffect, useMemo } from 'react'

import { createContextWithProvider } from 'app/utils/createContext'

import { useWalletBase } from 'lib/wallet'

import UseWalletProvider from './UseWallet/Provider'
import { useChainDialog } from './modules/chain-dialog'
import { useConnectDialog } from './modules/connect-dialog'

const useWalletService = () => {
  const chainDialog = useChainDialog()
  const connectDialog = useConnectDialog()
  const wallet = useWalletBase()

  const { account, network, status, connect } = wallet

  const networkAccount = useMemo(() => (!network ? null : account), [account, network])

  useEffect(() => {
    if (status === 'connected' && !account) {
      connect()
    }
  }, [account, connect, status])

  return { ...wallet, networkAccount, connectDialog, chainDialog }
}

export const {
  Context,
  Provider: WalletProvider,
  createUseContext: createWalletContext,
} = createContextWithProvider(useWalletService)

export const Provider: FCC = (props) => {
  return (
    <UseWalletProvider>
      <WalletProvider>{props.children}</WalletProvider>
    </UseWalletProvider>
  )
}

export default Provider
