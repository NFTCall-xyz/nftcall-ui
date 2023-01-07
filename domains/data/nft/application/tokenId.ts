import { useControllers, useWallet } from 'domains'
import { useNetwork } from 'domains/data'
import { useCallback, useEffect } from 'react'
import { useTokenIdStateData } from 'store/nft/tokenId/useTokenIdStateData'

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

  useEffect(() => {
    updateWallet()
  }, [updateWallet])

  return {
    ...returnValue,
    updateWallet,
  }
}
