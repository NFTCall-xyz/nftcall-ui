import { useCallback, useRef } from 'react'
import { useImmer } from 'use-immer'

import { useObjectMemo } from 'app/hooks/useValues'

export function usePost<T, A extends Array<any>>(fn: (...args: A) => Promise<T>) {
  const [loading, setInternalLoading] = useImmer(false)
  const loadingRef = useRef(loading)
  const setLoading = useCallback(
    (value: boolean) => {
      setInternalLoading(value)
      loadingRef.current = value
    },
    [setInternalLoading]
  )
  const isCanceledRef = useRef(false)

  const post = useCallback(
    (...args: A) => {
      if (loadingRef.current) return Promise.reject()
      setLoading(true)
      isCanceledRef.current = false
      return fn(...args)
        .then((data) => {
          if (isCanceledRef.current) return Promise.reject('canceled')
          return data
        })
        .finally(() => setLoading(false))
    },
    [fn, setLoading]
  )

  const cancel = useCallback(() => (isCanceledRef.current = false), [])

  return useObjectMemo({ post, cancel, loading })
}

export type UseRequestReturnValue = ReturnType<typeof usePost>
