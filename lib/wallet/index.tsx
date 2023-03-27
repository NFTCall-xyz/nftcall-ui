import { useWeb3React } from '@web3-react/core'
import { useEffect, useMemo } from 'react'
import { useImmer } from 'use-immer'

import { useMount } from 'app/hooks/useMount'
import { createContextWithProvider } from 'app/utils/createContext'

import { defaultMarket } from 'lib/protocol/market'

import UseWalletProvider from './Provider'
import { useWalletDialogs } from './application/dialogs'
import { getChainInformationByChainId } from './constant/chains'

const useWalletService = () => {
  const dialogs = useWalletDialogs()
  const [error, setError] = useImmer(null)
  const [status, setStatus] = useImmer('disconnected')
  const { connector, chainId, accounts, isActivating, isActive, provider, ENSNames, ENSName, account } = useWeb3React()

  const network = useMemo(() => {
    return getChainInformationByChainId(chainId)
  }, [chainId])

  useMount(() => {
    const promise = connector.connectEagerly()
    if (promise) {
      promise.catch((e) => {
        console.error('[wallet][connectEagerly]', e)
        setError(e)
      })
    }
  })

  useEffect(() => {
    console.log('[Web3React]', {
      connector,
      chainId,
      network,
      accounts,
      isActivating,
      isActive,
      provider,
      ENSNames,
      ENSName,
      account,
    })
  }, [ENSName, ENSNames, account, accounts, chainId, connector, isActivating, isActive, network, provider])

  return {
    connector,
    dialogs,
    chainId: chainId || defaultMarket.chainId,
    network,
    accounts,
    isActivating,
    isActive,
    provider,
    ENSNames,
    ENSName,
    account,
    error,
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
