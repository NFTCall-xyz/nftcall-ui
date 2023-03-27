import { BigNumber as EthersBN } from '@ethersproject/bignumber'
import { useWeb3React } from '@web3-react/core'
import type { BigNumber, providers } from 'ethers'
import { useCallback } from 'react'

export type transactionType = {
  value?: string
  from?: string
  to?: string
  nonce?: number
  gasLimit?: BigNumber
  gasPrice?: BigNumber
  data?: string
  chainId?: number
}

export const useSendTransaction = () => {
  const { provider: web3Provider } = useWeb3React<providers.Web3Provider>()

  const send = useCallback(
    (extendedTxData: transactionType) => {
      const { from, ...txData } = extendedTxData
      const signer = web3Provider.getSigner(from)
      return signer.sendTransaction({
        ...txData,
        value: txData.value ? EthersBN.from(txData.value) : undefined,
      })
    },
    [web3Provider]
  )

  return send
}

export type SendTransaction = ReturnType<typeof useSendTransaction>
