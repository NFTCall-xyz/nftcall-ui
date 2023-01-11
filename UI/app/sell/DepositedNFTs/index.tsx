import Grid from '@mui/material/Grid'
import NFTCard from './NFTCard'
import { useDepositedNFTs } from './useDepositedNFTs'
import { LoadMoreButton } from 'components/btn/LoadMoreButton'
import { useUpdateNFTAssets } from 'domains/data/nft/hooks/useUpdateNFTAssets'

const DepositedNFTs = () => {
  const { data, onLoadMore, noMoreData, disabled } = useDepositedNFTs()
  useUpdateNFTAssets(data)

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
