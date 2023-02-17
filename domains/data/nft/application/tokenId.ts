import { useControllers, useWallet } from 'domains'
import { useCallback, useEffect, useMemo } from 'react'

import { getOpenSeaMainNetworkAddress } from 'app/constant/openSea'
import { log } from 'app/utils/dev'

import { getUseCacheMemo } from 'database/helpers'
import { db } from 'database/nftcall'

import { useNetwork } from 'domains/data'

import { getStoreCacheData } from 'store/nft/tokenId/assets/adapter'
import type { AssetsData } from 'store/nft/tokenId/assets/adapter/getAssetsData'
import { useTokenIdStateData } from 'store/nft/tokenId/useTokenIdStateData'
import type { WalletData } from 'store/nft/tokenId/wallet/adapter/getWalletData'

type UseCacheMemoProps = { chainId: number }
const { useCacheMemo, useCacheDataEffect } = getUseCacheMemo(
  () => db.nftAssets,
  (table, { chainId }: UseCacheMemoProps) => table.filter((callPool) => callPool.network === chainId).toArray()
)

const useAssetsData = (assetsSourceData: AssetsData[]) => {
  const { chainId } = useWallet()
  const assetsCacheData = useCacheMemo([assetsSourceData], {
    chainId,
  })

  const assets: AssetsData[] = useMemo(() => {
    if (!assetsCacheData.length) return assetsSourceData
    const returnValue = assetsCacheData
    log('[Assets]', returnValue)
    return returnValue
  }, [assetsCacheData, assetsSourceData])

  useCacheDataEffect(assetsSourceData, (data) => {
    const network = chainId
    const items = data.map((i) => {
      const returnValue = { ...i, network, tokenId: i.token_id }
      return returnValue
    })
    return items
  })
  return assets
}

export const useTokendId = () => {
  const { assets: assetsSourceData, wallet } = useTokenIdStateData()
  const { address, markets } = useNetwork()
  const { networkAccount } = useWallet()
  const { tokenId } = useControllers()
  const updateWallet = useCallback(() => {
    const chainId = address.chainId
    const nfts = markets.map((market) => market.address.NFT)
    if (!networkAccount || !chainId || !nfts.length) return Promise.resolve()
    return tokenId.wallet.single.run({
      chainId,
      user: networkAccount,
      nfts,
    })
  }, [address.chainId, markets, networkAccount, tokenId.wallet.single])

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
