import type { ChainId } from 'lib/protocol/chain/types'
import axios from 'axios'
import { utils } from 'ethers'
import { getWalletBaseData } from './getWalletBaseData'

export type WalletProps = {
  chainId: ChainId
  user: string
  nfts: string[]
}

export const walletRequest = ({ chainId, nfts, user }: WalletProps) => {
  let results: any[] = []
  const fn = (params: any): Promise<any> =>
    axios
      .get(`https://deep-index.moralis.io/api/v2/${user}/nft`, {
        params,
        headers: {
          'x-api-key': 'FgLkty4uX7ZbGHbprH2VelX8upVUqT139M87gBhaf9oMiTMCro5ZHkmqJyocYxjg',
        },
      })
      .then(({ data: { cursor, page, page_size, total, result } }) => {
        results = results.concat(result)
        if ((page + 1) * page_size < total) {
          params.cursor = cursor
          return fn(params)
        }
      })
  return fn({
    chain: utils.hexValue(chainId),
    token_addresses: nfts,
    address: user,
  }).then(() => getWalletBaseData(results))
}

export type WalletSliceState = Awaited<ReturnType<typeof walletRequest>>
