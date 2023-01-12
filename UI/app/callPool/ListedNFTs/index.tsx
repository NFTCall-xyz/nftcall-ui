import { Grid } from '@mui/material'
import { LoadMoreButton } from 'components/btn/LoadMoreButton'
import { useUpdateNFTAssets } from 'domains/data/nft/hooks/useUpdateNFTAssets'
import { cloneDeep } from 'lodash'
import { useRef, useState, useCallback, useMemo } from 'react'
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
  const clearSet = useCallback(() => {
    const s = setRef.current
    s.clear()
    setSize(0)
  }, [])
  useUpdateNFTAssets(data)
  const nfts = useMemo(() => {
    const sourceData = cloneDeep(data)
    return sourceData.sort((a, b) => a.updateTimestamp - b.updateTimestamp)
  }, [data])

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Grid container spacing={2}>
          {nfts.map((nft) => (
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
        <OpenCallOptions
          {...{
            setRef,
            size,
            request: () => {
              restart()
              clearSet()
            },
            data,
            onCheckChange,
          }}
        />
      </Grid>
    </Grid>
  )
}

export default ListedNFTs
