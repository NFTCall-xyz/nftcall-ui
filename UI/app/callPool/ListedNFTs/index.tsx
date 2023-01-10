import { Grid } from '@mui/material'
import { LoadMoreButton } from 'components/btn/LoadMoreButton'
import { useNFT } from 'domains/data'
import { useRef, useState, useCallback, useEffect, useMemo } from 'react'
import { getWalletDataByNFTs } from 'store/nft/tokenId/wallet/adapter/getWalletData'
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
