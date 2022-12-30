import { Grid } from '@mui/material'
import type { FC } from 'react'

import StatsCard from './StatsCard'
import NumberDisplay from 'lib/math/components/NumberDisplay'

const Stats: FC = () => {
  const cardList = [
    {
      price: (
        <div>
          <NumberDisplay value={'1211.12'} abbreviate={{}} symbol={'ETH'} />
        </div>
      ),
      title: 'AccumulativePremium',
    },
    {
      price: (
        <div>
          <NumberDisplay value={'1211.12'} abbreviate={{}} symbol={'ETH'} />
        </div>
      ),
      title: 'TotalNFTSales',
    },
    {
      price: (
        <div>
          <NumberDisplay value={'122'} abbreviate={{}} symbol={'ETH'} />
        </div>
      ),
      title: 'TotalDepositedNFTs',
    },
    {
      price: (
        <div>
          <NumberDisplay value={'22'} abbreviate={{}} symbol={'ETH'} />
        </div>
      ),
      title: 'ActiveOptionContracts',
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
