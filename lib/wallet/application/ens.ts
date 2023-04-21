import type { Web3Provider } from '@ethersproject/providers'
import { useCallback, useEffect, useRef } from 'react'
import { useImmer } from 'use-immer'

export const useENS = (provider: Web3Provider) => {
  const ref = useRef(new Map<string, Promise<string>>())

  const useGetENSName = useCallback(
    function useGetENSName(address: string) {
      const [ENSName, setENSName] = useImmer(undefined)

      useEffect(() => {
        if (!address || !provider) return
        if (ref.current.has(address)) {
          ref.current.get(address).then(setENSName)
        } else {
          const promise = provider.lookupAddress(address)
          ref.current.set(address, promise)
          promise.then(setENSName)
        }
      }, [address, setENSName])

      return ENSName
    },
    [provider]
  )

  return {
    useGetENSName,
  }
}
