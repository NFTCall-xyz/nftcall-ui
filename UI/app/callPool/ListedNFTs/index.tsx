import { Grid } from '@mui/material'
import { useIds } from 'app/hooks/useIds'
import { LoadMoreButton } from 'components/btn/LoadMoreButton'
import { useUpdateNFTAssets } from 'domains/data/nft/hooks/useUpdateNFTAssets'
import { cloneDeep } from 'lodash'
import { useMemo } from 'react'
import NFTCard from './NFTCard'
import OpenCallOptions from './OpenCallOptions'
import { useListedNFTs } from './useListedNFTs'

const ListedNFTs = () => {
  const { data, onLoadMore, noMoreData, disabled, restart } = useListedNFTs()
  useUpdateNFTAssets(data)
  const nfts = useMemo(() => {
    const sourceData = cloneDeep(data)
    return sourceData.sort((a, b) => a.updateTimestamp - b.updateTimestamp)
  }, [data])

  const ids = useIds()

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
