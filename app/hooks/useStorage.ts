import { useCallback, useEffect, useRef } from 'react'

export const useStorage = <T>() => {
  const ref = useRef(new Map<string, T>())
  const set = useCallback((key: string, value: T) => {
    ref.current.set(key, value)
  }, [])
  const remove = useCallback((key: string) => {
    ref.current.delete(key)
  }, [])
  const useInstance = useCallback(
    (key: string, value: T) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        if (!key) return
        set(key, value)
        return () => {
          remove(key)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])
    },
    [remove, set]
  )
  const get = useCallback(() => {
    return Array.from(ref.current.values())
  }, [])

  return {
    get,
    set,
    remove,
    useInstance,
  }
}

export type UseStorage<T> = ReturnType<typeof useStorage<T>>
