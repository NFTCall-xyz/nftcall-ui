import Grid from '@mui/material/Grid'
import NFTCard from './NFTCard'
import { useDepositedNFTs } from './useDepositedNFTs'
import { LoadMoreButton } from 'components/btn/LoadMoreButton'
import { useUpdateNFTAssets } from 'domains/data/nft/hooks/useUpdateNFTAssets'

const DepositedNFTs = () => {
  const { data, onLoadMore, noMoreData, disabled, restart } = useDepositedNFTs()
  useUpdateNFTAssets(data)

  return (
    <Grid container spacing={2}>
      {data.map((nft) => (
        <NFTCard {...{ ...nft, restart }} key={nft.nftAddress + nft.tokenId} />
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
