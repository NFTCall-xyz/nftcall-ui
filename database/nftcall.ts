import type { Table } from 'dexie'
import Dexie from 'dexie'
import type { CallPool } from 'domains/data/callPools'
import type { AllCallPools } from 'domains/data/callPools/application/allCallPoolsData'
import type { AssetsData } from 'store/nft/tokenId/assets/adapter/getAssetsData'

type BaseType = {
  network: number
}

type CallPoolTable = BaseType &
  CallPool & {
    callPoolAddress: string
  }
type ALLCallPoolTable = BaseType & AllCallPools

type NFTAssetsTable = BaseType & AssetsData

class NFTCallDataBase extends Dexie {
  callPools!: Table<CallPoolTable>
  allCallPools!: Table<ALLCallPoolTable>
  nftAssets!: Table<NFTAssetsTable>

  constructor() {
    super('NFTCallDataBase')
    this.version(1).stores({
      allCallPools: '&network',
      callPools: '[network+callPoolAddress], network',
      nftAssets: '[network+nftAddress+tokenId], network',
    })
  }
}

export const db = new NFTCallDataBase()
