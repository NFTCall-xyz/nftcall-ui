import type { Table } from 'dexie'
import { useEffect } from 'react'
import { useImmer } from 'use-immer'

import { BNSaveToBNArray, setItems } from './helpers/dexie'

type UseCacheDataProps<Q, T extends Table> = {
  getTable: () => T
  getCacheData: (table: T) => Promise<Q[]>
  sourceData: Q[]
  getSaveData: (data: Q[]) => Q[]
}
export const useCacheData = <Q, T extends Table>(props: UseCacheDataProps<Q, T>) => {
  const { getTable, getCacheData, sourceData, getSaveData } = props
  const table = getTable()
  const [cacheData, setCacheData] = useImmer(undefined as Q[])

  useEffect(() => {
    let stop = false
    getCacheData(table).then((data) => {
      if (stop) return
      setCacheData(() => BNSaveToBNArray(data))
    })
    return () => {
      stop = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getCacheData])

  useEffect(
    () => {
      setItems(table, getSaveData(sourceData))
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [sourceData]
  )

  return cacheData
}
