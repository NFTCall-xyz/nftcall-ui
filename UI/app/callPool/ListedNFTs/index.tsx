import { Stack, Grid } from '@mui/material'
import { useRef, useState, useCallback } from 'react'
import NFTCard from './NFTCard'
import OpenCallOptions from './OpenCallOptions'

const ListedNFTs = () => {
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

  const nfts = [
    {
      id: '3123',
      description: '#3123',
      minStrikePrice: 0,
      maxExpriyTime: 0,
    },
  ]

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
