import type { Table } from 'dexie'
import Dexie from 'dexie'

export interface CallPoolCacheData {
  id?: number
  network: string
  key: string
  value: any
}

export class CallPoolCacheDB extends Dexie {
  balanceOf!: Table<CallPoolCacheData>
  previewOpenCall!: Table<CallPoolCacheData>

  constructor() {
    super('CallPoolCacheDB')
    this.version(1).stores({
      balanceOf: '++id, [network+key]',
      previewOpenCall: '++id, [network+key]',
    })
  }
}

export const callPoolCacheDB = new CallPoolCacheDB()