import { Stack, Grid } from '@mui/material'
import { useWallet } from 'domains'
import { useRef, useState, useCallback, useEffect, useMemo } from 'react'
import { getListedNFTs } from './getListedNFTs'
import NFTCard from './NFTCard'
import OpenCallOptions from './OpenCallOptions'

const ListedNFTs = () => {
  const [NFTs, setNFTs] = useState([])
  const { networkAccount } = useWallet()
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

  const nfts = useMemo(() => {
    return NFTs.map(({ tokenId, strikePriceGapIdx, durationIdx }) => {
      return {
        id: tokenId,
        description: '#' + tokenId,
        minStrikePrice: strikePriceGapIdx,
        maxExpriyTime: durationIdx,
      }
    })
  }, [NFTs])

  useEffect(() => {
    if (!networkAccount) return
    getListedNFTs({
      user: networkAccount,
      nft: '0x445b465bA8E68C6f2d50C29DB5B629E40F6e9978',
    }).then((data) => {
      setNFTs(data)
    })
  }, [networkAccount])

  return (
    <Grid container spacing={2}>
      <Grid item xs={8}>
        <Stack spacing={2} direction="row">
          {nfts.map((nft) => (
            <NFTCard key={nft.id} {...{ ...nft, onCheckChange }} />
          ))}
        </Stack>
      </Grid>
      <Grid item xs={4}>
        <OpenCallOptions {...{ setRef, size }} />
      </Grid>
    </Grid>
  )
}

export default ListedNFTs
