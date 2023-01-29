import type { Table } from 'dexie'
import Dexie from 'dexie'
import type { CallPool } from 'domains/data/callPools'
import type { AllCallPools } from 'domains/data/callPools/application/allCallPoolsData'

type BaseType = {
  network: number
}

type CallPoolTable = BaseType &
  CallPool & {
    callPoolAddress: string
  }
type ALLCallPoolTable = BaseType & AllCallPools

type NFTTable = BaseType & {
  nftAddress: string
  tokenId: string
}

class NFTCallDataBase extends Dexie {
  callPools!: Table<CallPoolTable>
  allCallPools!: Table<ALLCallPoolTable>
  nfts!: Table<NFTTable>

  constructor() {
    super('NFTCallDataBase')
    this.version(1).stores({
      allCallPools: '&network',
      callPools: '[network+callPoolAddress], network',
      nfts: '[network+nftAddress+tokenId], network',
    })
  }
}

export const db = new NFTCallDataBase()
