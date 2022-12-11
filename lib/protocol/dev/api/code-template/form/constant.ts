import type { DataFetcherReq } from './types'

export const initialValues: DataFetcherReq = {
  serviceName: '',
  contractName: '',
  methodNames:
    'balanceOf,checkAvailable,deposit,withdraw,takeNFTOffMarket,relistNFT,previewOpenCall,openCall,exerciseCall',
}
