import { useCallback, useMemo, useRef, useState } from 'react'

export const useIds = <T extends number | string = string>(defalutIds: Array<number | string> = []) => {
  const setRef = useRef(new Set(defalutIds))
  const [size, setSize] = useState(0)
  const add = useCallback((id: T) => {
    const s = setRef.current
    s.add(id)
    setSize(s.size)
  }, [])
  const remove = useCallback((id: T) => {
    const s = setRef.current
    s.delete(id)
    setSize(s.size)
  }, [])
  const clear = useCallback(() => {
    const s = setRef.current
    s.clear()
    setSize(0)
  }, [])
  const has = useCallback((id: T) => {
    const s = setRef.current
    return s.has(id)
  }, [])
  const values = useMemo(() => {
    return Array.from(setRef.current.values()) as T[]
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
