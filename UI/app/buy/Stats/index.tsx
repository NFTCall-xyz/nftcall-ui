import { Grid, Stack } from '@mui/material'
import type { FC } from 'react'

import StatsCard from './StatsCard'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import { useAppBuy } from 'domains/pages/app'

const Stats: FC = () => {
  const { stats } = useAppBuy()
  const cardList = [
    {
      price: (
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol={'ETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={stats.accumulativePremium} abbreviate={{}} />
        </Stack>
      ),
      title: 'AccumulativePremium',
    },
    {
      price: (
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol={'ETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={stats.totalTradingVolume} abbreviate={{}} />
        </Stack>
      ),
      title: 'TotalTradingVolume',
    },
    {
      price: (
        <div>
          <NumberDisplay value={stats.totalDepositedNFTs} abbreviate={{}} />
        </div>
      ),
      title: 'TotalDepositedNFTs',
    },
    {
      price: (
        <div>
          <NumberDisplay value={stats.totalOpenInterest} abbreviate={{}} />
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
