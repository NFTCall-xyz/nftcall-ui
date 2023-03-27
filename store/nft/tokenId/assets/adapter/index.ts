import axios from 'axios'
import qs from 'qs'
import store from 'store'

import { getOpenSeaUrl } from 'app/constant/openSea'
import { safeGet } from 'app/utils/get'
import { createPromise } from 'app/utils/promise'

import type { ChainId } from 'lib/wallet/constant/chains'

import type { AssetsBaseData } from './getAssetsBaseData'
import { getAssetsBaseData } from './getAssetsBaseData'
import type { AssetsData } from './getAssetsData'

export const getStoreCacheData = () => store.getState().nft.tokenId.assets.data || ([] as undefined)
export type AssetsProps = {
  chainId: ChainId
  getStoreCacheData: () => AssetsData[]
  nftAddress: string
  tokenIds: string[]
}

export const assetsRequest = ({ chainId, nftAddress, getStoreCacheData, tokenIds }: AssetsProps) => {
  const storeCacheData = getStoreCacheData()
  const cache = storeCacheData.filter((i) => i.nftAddress === nftAddress)
  const newTokenIds = tokenIds.filter((tokenId) => !cache.find((i) => i.token_id === tokenId))
  if (!newTokenIds.length) return Promise.resolve(storeCacheData)

  const fn = () =>
    axios
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
      .then(({ data: { assets } }) => getAssetsBaseData(getStoreCacheData(), nftAddress, assets))
      .catch((e) => {
        if (safeGet(() => e.response.status === 429)) {
          const { promise, reslove } = createPromise<AssetsBaseData[]>()
          setTimeout(() => reslove(fn()), 1300)
          return promise
        } else {
          return Promise.reject(e)
        }
      })

  return fn()
}

export type AssetsSliceState = Awaited<ReturnType<typeof assetsRequest>>
