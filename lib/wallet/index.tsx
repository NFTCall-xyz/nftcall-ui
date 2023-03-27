import { useWeb3React } from '@web3-react/core'
import { useMemo } from 'react'

import { useMount } from 'app/hooks/useMount'
import { createContextWithProvider } from 'app/utils/createContext'

import { defaultMarket } from 'lib/protocol/market'

import UseWalletProvider from './Provider'
import { useWalletDialogs } from './application/dialogs'
import { WalletStatus } from './constant'
import { getChainInformationByChainId } from './constant/chains'

const useWalletService = () => {
  const dialogs = useWalletDialogs()
  const {
    connector,
    chainId: walletChainId,
    accounts,
    isActivating,
    isActive,
    provider,
    ENSNames,
    ENSName,
    account,
  } = useWeb3React()

  const status = useMemo(() => {
    if (isActivating) {
      return WalletStatus.connecting
    } else if (isActive) {
      return WalletStatus.connected
    }
    return WalletStatus.disconnected
  }, [isActivating, isActive])

  const chainId = useMemo(() => walletChainId || defaultMarket.chainId, [walletChainId])
  const network = useMemo(() => {
    return getChainInformationByChainId(chainId)
  }, [chainId])

  useMount(() => {
    const promise = connector.connectEagerly()
    if (promise) {
      promise.catch((e) => {
        console.error('[wallet][connectEagerly]', e)
      })
    }
  })

  return {
    connector,
    dialogs,
    chainId,
    network,
    accounts,
    isActivating,
    isActive,
    provider,
    ENSNames,
    ENSName,
    account,
    status,
  }
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
