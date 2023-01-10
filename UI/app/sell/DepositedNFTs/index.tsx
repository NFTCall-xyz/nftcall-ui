import Grid from '@mui/material/Grid'
import { useEffect, useMemo } from 'react'
import NFTCard from './NFTCard'
import { useNFT } from 'domains/data'
import { getWalletDataByNFTs } from 'store/nft/tokenId/wallet/adapter/getWalletData'
import { useDepositedNFTs } from './useDepositedNFTs'
import { LoadMoreButton } from 'components/btn/LoadMoreButton'

const DepositedNFTs = () => {
  const { data, onLoadMore, noMoreData, disabled } = useDepositedNFTs()
  const {
    tokenId: { updateAssets },
  } = useNFT()

  const { wallet, key } = useMemo(() => getWalletDataByNFTs(data), [data])

  useEffect(() => {
    updateAssets(wallet)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return (
    <Grid container spacing={2}>
      {data.map((nft) => (
        <Grid item xs={6} sm={3} md={2.4} key={nft.nftAddress + nft.tokenId}>
          <NFTCard {...{ ...nft }} />
        </Grid>
      ))}
      <Grid item xs={12}>
        <LoadMoreButton
          {...{
            onLoadMore,
            end: noMoreData,
            disabled,
          }}
        />
      </Grid>
    </Grid>
  )
}

export default DepositedNFTs
