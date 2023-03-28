import type { Table } from 'dexie'
import { cloneDeep } from 'lodash'

import { toBN } from 'lib/math'

const BNToBNSaveArray = (obj: any[]) => {
  const arr = cloneDeep(obj)
  return arr.map((item) => BNToBNSave(item))
}

const BNToBNSave = (obj: any) => {
  if (typeof obj !== 'object') return obj
  const o: any = {}
  for (const [k, v] of Object.entries<any>(obj)) {
    if (!v) continue
    if (v._isBigNumber) {
      o[k] = {
        value: v.toString(),
        _isBigNumber: true,
      }
    } else if (v instanceof Array) {
      if (v.length === 0) continue
      o[k] = BNToBNSaveArray(v)
    } else if (typeof v === 'object') {
      if (Object.keys(v).length === 0) continue
      o[k] = BNToBNSave(v)
    } else {
      o[k] = v
    }
  }
  return o
}

export const BNSaveToBNArray = (arr: any[]) => {
  return arr.map((item) => BNSaveToBN(item))
}

const BNSaveToBN = (obj: any) => {
  if (typeof obj !== 'object') return obj
  const o: any = {}
  for (const [k, v] of Object.entries<any>(obj)) {
    if (!v) continue
    if (v._isBigNumber) {
      o[k] = toBN(v.value)
    } else if (v instanceof Array) {
      o[k] = BNSaveToBNArray(v)
    } else if (typeof v === 'object') {
      o[k] = BNSaveToBN(v)
    } else {
      o[k] = v
    }
  }
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
