import { useMemo } from 'react'

import { getCollections } from './constant/collections'

export const useCollections = () => {
  const returnValue = useMemo(() => {
    return getCollections()
  }, [])
  return returnValue
}
