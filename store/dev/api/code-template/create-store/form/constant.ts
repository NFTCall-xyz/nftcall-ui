import type { DataFetcherReq } from './types'

export const initialValues: DataFetcherReq = {
  storeKey: 'nftcallProtocol.callPool',
  contractName: '',
  contractType: '',
  methodNames:
    'balanceOf,checkAvailable,deposit,withdraw,takeNFTOffMarket,relistNFT,previewOpenCall,openCall,exerciseCall',
}
