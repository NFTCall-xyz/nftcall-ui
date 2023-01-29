import { cloneDeep, isEmpty } from 'lodash'
import type { Table } from 'dexie'
import { toBN } from 'lib/math'
import { useLiveQuery } from 'dexie-react-hooks'
import { useEffect } from 'react'

const BNToBNSaveArray = (obj: any[]) => {
  const arr = cloneDeep(obj)
  return arr.map((item) => BNToBNSave(item))
}
const BNToBNSave = (obj: any) => {
  if (typeof obj !== 'object') return obj
  const o: any = {}
  Object.keys(obj).forEach((k) => {
    if (!obj[k]) return
    if (obj[k]._isBigNumber) {
      o[k] = {
        value: obj[k].toString(),
        _isBigNumber: true,
      }
    } else if (obj[k] instanceof Array) {
      if (isEmpty(obj[k])) return
      o[k] = BNToBNSaveArray(obj[k])
    } else if (typeof obj[k] === 'object') {
      if (isEmpty(obj[k])) return
      o[k] = BNToBNSave(obj[k])
    } else {
      o[k] = obj[k]
    }
  })
  return o
}

const BNSaveToBNArray = (arr: any[]) => {
  return arr.map((item) => BNSaveToBN(item))
}
const BNSaveToBN = (obj: any) => {
  if (typeof obj !== 'object') return obj
  const o: any = {}
  Object.keys(obj).forEach((k) => {
    if (!obj[k]) return
    if (obj[k]._isBigNumber) {
      o[k] = toBN(obj[k].value)
    } else if (obj[k] instanceof Array) {
      o[k] = BNSaveToBNArray(obj[k])
    } else if (typeof obj[k] === 'object') {
      o[k] = BNSaveToBN(obj[k])
    } else {
      o[k] = obj[k]
    }
  })
  return o
}

export const setItems = <Q, T extends Table<Q>>(table: T, items: Q[]) => {
  if (!items) return
  if (!(items instanceof Array)) items = [items]
  if (!items.length) return

  return table.bulkPut(BNToBNSaveArray(items))
}

export const getItems = <Q, T extends Table<Q>>(table: T, keys: string[]) => {
  return table.bulkGet(keys).then((data) => BNSaveToBNArray(data) as Q[])
}

export const getUseCacheMemo = <Q, T extends Table, P>(
  getTable: () => T,
  getCacheData: (table: T, props: P) => PromiseLike<Q[]>
) => {
  const useCacheMemo = (deps: any[], props: P): Q[] => {
    const table = getTable()
    const cacheCallPools = useLiveQuery(async () => {
      if (__SERVER__) return
      try {
        const data = await getCacheData(table, props)
        return BNSaveToBNArray(data) as Q[]
      } catch (error) {
        console.error('[useCacheMemo][getCacheData]', getCacheData)
        return
      }
    }, deps)
    return cacheCallPools || []
  }

  function useCacheDataEffect(data: Partial<Q>, getSaveData: (data: Q) => Q, deps?: any[]): void
  function useCacheDataEffect(data: Partial<Q>[], getSaveData: (data: Q[]) => Q[], deps?: any[]): void
  function useCacheDataEffect(data: any, getSaveData: any, deps?: any[]): void {
    const table = getTable()
    useEffect(
      () => {
        setItems(table, getSaveData(data))
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      deps ? deps : [data]
    )
  }

  return {
    useCacheMemo,
    useCacheDataEffect,
  }
}
