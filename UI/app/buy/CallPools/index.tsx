import { Grid } from '@mui/material'
import { useCallPools } from 'domains/data'
import { useUpdateNFTAssets } from 'domains/data/nft/hooks/useUpdateNFTAssets'
import type { BaseNFT } from 'domains/data/nft/types'
import type { FC } from 'react'
import { useMemo } from 'react'

import CallPoolCard from './CallPoolCard'

const Stats: FC = () => {
  const { callPools } = useCallPools()
  const nfts = useMemo(() => {
    let returnValue: BaseNFT[] = []
    callPools.forEach(({ stats }) => {
      if (!stats || !stats.nfts || !stats.nfts.length) return
      returnValue = returnValue.concat(stats.nfts)
    })
    return returnValue
  }, [callPools])

  useUpdateNFTAssets(nfts)
  return (
    <div>
      <Grid container spacing={2}>
        {callPools.map((callPool, index) => (
          <Grid item lg={3} sm={6} xs={12} key={index}>
            <CallPoolCard callPool={callPool} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Stats
