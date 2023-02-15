import { useCallback, useMemo, useRef } from 'react'
import { useImmer } from 'use-immer'

export const useIds = <T extends number | string = string>(defalutIds: Array<number | string> = []) => {
  const setRef = useRef(new Set(defalutIds))
  const [size, setSize] = useImmer(0)
  const add = useCallback(
    (id: T) => {
      const s = setRef.current
      s.add(id)
      setSize(s.size)
    },
    [setSize]
  )
  const remove = useCallback(
    (id: T) => {
      const s = setRef.current
      s.delete(id)
      setSize(s.size)
    },
    [setSize]
  )
  const clear = useCallback(() => {
    const s = setRef.current
    s.clear()
    setSize(0)
  }, [setSize])
  const has = useCallback((id: T) => {
    const s = setRef.current
    return s.has(id)
  }, [])
  const values = useMemo(() => {
    return Array.from(setRef.current.values()).reverse() as T[]
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [size])

  return {
    values,
    size,
    add,
    remove,
    has,
    clear,
  }
}

export type UseIds<T extends number | string = string> = ReturnType<typeof useIds<T>>
