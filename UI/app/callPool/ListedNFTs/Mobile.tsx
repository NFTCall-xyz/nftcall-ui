import { Grid } from '@mui/material'

import type { UseIds } from 'app/hooks/useIds'

import { LoadMoreButton } from 'components/btn/LoadMoreButton'

import type { ListedNFT } from './NFTCard'
import NFTCard from './NFTCard'
import OpenCallOptions from './OpenCallOptions'
import type { UseListedNFTs } from './useListedNFTs'

type Props = {
  listedNFTs: UseListedNFTs
  nfts: ListedNFT[]
  ids: UseIds
}
const ListedNFTs: FC<Props> = ({ listedNFTs: { data, onLoadMore, noMoreData, disabled, restart }, nfts, ids }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={8}>
        <Grid container spacing={2}>
          {nfts.map((nft) => (
            <Grid item xs={6} sm={3} key={nft.nftAddress + nft.tokenId}>
              <NFTCard {...{ ...nft, ids }} />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} paddingTop={2}>
          <LoadMoreButton
            {...{
              onLoadMore,
              end: noMoreData,
              disabled,
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={4}>
        <OpenCallOptions
          {...{
            request: () => {
              restart()
              ids.clear()
            },
            nfts: data,
            ids,
          }}
        />
      </Grid>
    </Grid>
  )
}

export default ListedNFTs
