import { useWeb3React } from '@web3-react/core'
import { useMemo } from 'react'
import { useImmer } from 'use-immer'

import { useMount } from 'app/hooks/useMount'
import { createContextWithProvider } from 'app/utils/createContext'

import { defaultMarket } from 'lib/protocol/market'

import UseWalletProvider from './UseWalletProvider'
import { useWalletDialogs } from './application/dialogs'
import { useENS } from './application/ens'
import { WalletStatus } from './constant'
import { getChainInformationByChainId } from './constant/chains'
import { getProvider } from './provider'

const useWalletService = () => {
  const [defalutChainId, setDefalutChainId] = useImmer(defaultMarket.chainId)
  const dialogs = useWalletDialogs()
  const {
    connector,
    chainId: walletChainId,
    accounts,
    isActivating,
    isActive,
    provider: walletProvider,
    ENSNames,
    ENSName,
    account,
  } = useWeb3React()

  const chainId = useMemo(() => walletChainId || defalutChainId, [walletChainId, defalutChainId])

  const provider = useMemo(() => {
    if (!walletProvider || !walletChainId) return getProvider(chainId)
    return walletProvider
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId, walletChainId, walletProvider])

  const status = useMemo(() => {
    if (isActivating) {
      return WalletStatus.connecting
    } else if (isActive) {
      return WalletStatus.connected
    }
    return WalletStatus.disconnected
  }, [isActivating, isActive])

  const network = useMemo(() => {
    return getChainInformationByChainId(chainId)
  }, [chainId])

  useMount(() => {
    try {
      ;(connector.connectEagerly() as Promise<any>).catch((e) => {
        console.error('[wallet][connectEagerly]', e)
      })
    } catch (error) {}
  })

  const ens = useENS(provider)

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

    setDefalutChainId,

    ens,
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
