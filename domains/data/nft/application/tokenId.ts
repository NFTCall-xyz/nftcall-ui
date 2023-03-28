import { useControllers, useWallet } from 'domains'
import { useCallback, useEffect, useMemo } from 'react'

import { getOpenSeaMainNetworkAddress } from 'app/constant/openSea'
import { log } from 'app/utils/dev'

import { useCacheData } from 'database/helpers'
import { db } from 'database/nftcall'

import { useNetwork } from 'domains/data'

import { getStoreCacheData } from 'store/nft/tokenId/assets/adapter'
import type { AssetsData } from 'store/nft/tokenId/assets/adapter/getAssetsData'
import { useTokenIdStateData } from 'store/nft/tokenId/useTokenIdStateData'
import type { WalletData } from 'store/nft/tokenId/wallet/adapter/getWalletData'

const useAssetsData = (assetsSourceData: AssetsData[]) => {
  const { chainId } = useWallet()

  const getTable = useCallback(() => db.nftAssets, [])
  const getCacheData = useCallback(
    (table: ReturnType<typeof getTable>) => table.filter((callPool) => callPool.network === chainId).toArray(),
    [chainId]
  )
  const assetsCacheData = useCacheData({
    getTable,
    getCacheData,
    sourceData: assetsSourceData,
    getSaveData: (data) => {
      const network = chainId
      const items = data.map((i) => {
        const returnValue = { ...i, network, tokenId: i.token_id }
        return returnValue
      })
      return items
    },
  })

  const assets: AssetsData[] = useMemo(() => {
    if (!assetsCacheData || !assetsCacheData.length) return assetsSourceData
    const returnValue = assetsCacheData
    log('[Assets]', returnValue)
    return returnValue
  }, [assetsCacheData, assetsSourceData])

  return assets
}

export const useTokendId = () => {
  const { assets: assetsSourceData, wallet } = useTokenIdStateData()
  const { address, markets } = useNetwork()
  const { account } = useWallet()
  const { tokenId } = useControllers()
  const updateWallet = useCallback(() => {
    const chainId = address.chainId
    const nfts = markets.map((market) => market.address.NFT)
    if (!account || !chainId || !nfts.length) return Promise.resolve()
    return tokenId.wallet.single.run({
      chainId,
      user: account,
      nfts,
    })
  }, [address.chainId, markets, account, tokenId.wallet.single])

  const updateAssets = useCallback(
    (wallet: WalletData[]) => {
      let stop = false
      const close = () => {
        stop = true
        tokenId.assets.single.stop()
      }
      const run = async () => {
        for (let i = 0; i < wallet.length; i++) {
          if (stop) return
          const { nftAddress, tokenIds } = wallet[i]
          await tokenId.assets.single.run({
            chainId: address.chainId,
            getStoreCacheData,
            nftAddress: getOpenSeaMainNetworkAddress(nftAddress),
            tokenIds,
          })
        }
      }
      run()
      return close
    },
    [address.chainId, tokenId.assets.single]
  )

  useEffect(() => {
    updateWallet()
  }, [updateWallet])

  const assets = useAssetsData(assetsSourceData)

  return {
    assets,
    wallet,
    updateWallet,
    updateAssets,
  }
}
