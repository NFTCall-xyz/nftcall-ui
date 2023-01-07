import { getAssetsBaseData } from './getAssetsBaseData'
import type { AssetsData } from './getAssetsData'
import axios from 'axios'
import type { ChainId } from 'lib/protocol/chain/types'
import { getOpenSeaUrl } from 'app/constant/openSea'
import qs from 'qs'

export type AssetsProps = {
  chainId: ChainId
  storeCacheData: AssetsData[]
  nftAddress: string
  tokenIds: string[]
}

export const assetsRequest = ({ chainId, storeCacheData, nftAddress, tokenIds }: AssetsProps) => {
  const cache = storeCacheData.filter((i) => i.nftAddress === nftAddress)
  const newTokenIds = tokenIds.filter((tokenId) => !cache.find((i) => i.token_id === tokenId))
  if (!newTokenIds.length) return Promise.resolve(storeCacheData)

  return axios
    .request({
      method: 'GET',
      url: getOpenSeaUrl(chainId, '/api/v1/assets'),
      params: {
        limit: newTokenIds.length,
        asset_contract_address: nftAddress,
        token_ids: newTokenIds,
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'repeat' })
      },
      headers: { accept: 'application/json' },
    })
    .then(({ data: { assets } }) => getAssetsBaseData(storeCacheData, nftAddress, assets))
}

export type AssetsSliceState = Awaited<ReturnType<typeof assetsRequest>>
