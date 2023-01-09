import Grid from '@mui/material/Grid'
import { useControllers } from 'domains'
import { useCallback, useEffect, useMemo } from 'react'
import NFTCard from './NFTCard'
import { useNetwork } from 'domains/data'
import { getStoreCacheData } from 'store/nft/tokenId/assets/adapter'
import type { WalletData } from 'store/nft/tokenId/wallet/adapter/getWalletData'
import { useDepositedNFTs } from './useDepositedNFTs'
import { LoadMoreButton } from 'components/btn/LoadMoreButton'

const DepositedNFTs = () => {
  const { data, onLoadMore, noMoreData, disabled } = useDepositedNFTs()
  const {
    address: { chainId },
  } = useNetwork()

  const {
    tokenId: {
      assets: { single: assetsSingle },
    },
  } = useControllers()

  const wallet = useMemo(() => {
    const wallet: WalletData[] = []
    data.forEach(({ tokenId, nftAddress }) => {
      let walletData = wallet.find((i) => i.nftAddress === nftAddress)
      if (!walletData) {
        walletData = { nftAddress, tokenIds: [] }
        wallet.push(walletData)
      }
      walletData.tokenIds.push(tokenId)

      // nfts.push({
      //   title: `minStrikePrice: ${minStrikePrice}\n maxExpriyTime: ${maxExpriyTime}`,
      //   action: null,
      // })
    })
    return wallet
  }, [data])

  const updateTokenIdAssets = useCallback(async () => {
    for (let i = 0; i < wallet.length; i++) {
      const { nftAddress, tokenIds } = wallet[i]
      await assetsSingle.run({
        chainId,
        getStoreCacheData,
        nftAddress,
        tokenIds,
      })
    }
  }, [assetsSingle, chainId, wallet])

  useEffect(() => {
    updateTokenIdAssets()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.map((i) => i.nftAddress + i.tokenId).join(',')])

  return (
    <Grid container spacing={2}>
      {data.map((nft) => (
        <Grid item xs={3} key={nft.nftAddress + nft.tokenId}>
          <NFTCard {...{ ...nft }} />
        </Grid>
      ))}
      <LoadMoreButton
        {...{
          onLoadMore,
          end: noMoreData,
          disabled,
        }}
      />
    </Grid>
  )
}

export default DepositedNFTs
