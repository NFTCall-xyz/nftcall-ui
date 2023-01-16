import { Grid, Stack } from '@mui/material'
import type { FC } from 'react'

import StatsCard from './StatsCard'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { useCallPools } from 'domains/data'
import TokenIcon from 'lib/protocol/components/TokenIcon'

const Stats: FC = () => {
  const { allCallPool } = useCallPools()
  const cardList = [
    {
      price: (
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol={'ETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={allCallPool.stats.accumulativePremium} abbreviate={{}} />
        </Stack>
      ),
      title: 'AccumulativePremium',
    },
    {
      price: (
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol={'ETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={allCallPool.stats.totalTradingVolume} abbreviate={{}} />
        </Stack>
      ),
      title: 'TotalTradingVolume',
    },
    {
      price: (
        <div>
          <NumberDisplay value={allCallPool.stats.totalDepositedNFTs} abbreviate={{}} />
        </div>
      ),
      title: 'TotalDepositedNFTs',
    },
    {
      price: (
        <div>
          <NumberDisplay value={0} abbreviate={{}} />
        </div>
      ),
      title: 'TotalOpenInterest',
    },
  ]

  return (
    <div>
      <Grid container spacing={2}>
        {cardList.map((card, index) => (
          <Grid item lg={3} sm={6} xs={12} key={index}>
            <StatsCard card={card} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Stats
