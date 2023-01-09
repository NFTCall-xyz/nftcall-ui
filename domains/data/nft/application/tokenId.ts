import { useControllers, useWallet } from 'domains'
import { useNetwork } from 'domains/data'
import { useCallback, useEffect } from 'react'
import { useTokenIdStateData } from 'store/nft/tokenId/useTokenIdStateData'
import type { WalletData } from 'store/nft/tokenId/wallet/adapter/getWalletData'
import { getStoreCacheData } from 'store/nft/tokenId/assets/adapter'

export const useTokendId = () => {
  const returnValue = useTokenIdStateData()
  const { address, markets } = useNetwork()
  const { networkAccount } = useWallet()
  const { tokenId } = useControllers()
  const updateWallet = useCallback(() => {
    const chainId = address.chainId
    const nfts = markets.map((market) => market.address.NFT)
    if (!networkAccount || !chainId || !nfts.length) return
    return tokenId.wallet.single.run({
      chainId,
      user: networkAccount,
      nfts,
    })
  }, [address.chainId, markets, networkAccount, tokenId.wallet.single])

  const updateAssets = useCallback(
    async (wallet: WalletData[]) => {
      for (let i = 0; i < wallet.length; i++) {
        const { nftAddress, tokenIds } = wallet[i]
        await tokenId.assets.single.run({
          chainId: address.chainId,
          getStoreCacheData,
          nftAddress,
          tokenIds,
        })
      }
    },
    [address.chainId, tokenId.assets.single]
  )

  useEffect(() => {
    updateWallet()
  }, [updateWallet])

  return {
    ...returnValue,
    updateWallet,
    updateAssets,
  }
}
