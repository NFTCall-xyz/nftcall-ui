import { Grid } from '@mui/material'
import { LoadMoreButton } from 'components/btn/LoadMoreButton'
import { useUpdateNFTAssets } from 'domains/data/nft/hooks/useUpdateNFTAssets'
import { useRef, useState, useCallback } from 'react'
import NFTCard from './NFTCard'
import OpenCallOptions from './OpenCallOptions'
import { useListedNFTs } from './useListedNFTs'

const ListedNFTs = () => {
  const { data, onLoadMore, noMoreData, disabled, restart } = useListedNFTs()
  const setRef = useRef<Set<string>>(new Set())
  const [size, setSize] = useState(0)
  const onCheckChange = useCallback((id: string, value: boolean) => {
    const s = setRef.current
    if (value) {
      s.add(id)
    } else {
      s.delete(id)
    }
    setSize(s.size)
  }, [])
  useUpdateNFTAssets(data)

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Grid container spacing={2}>
          {data.map((nft) => (
            <Grid item xs={4} key={nft.nftAddress + nft.tokenId}>
              <NFTCard {...{ ...nft, onCheckChange }} />
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
      <Grid item xs={4}>
        <OpenCallOptions {...{ setRef, size, request: restart, data, onCheckChange }} />
      </Grid>
    </Grid>
  )
}

export default ListedNFTs
