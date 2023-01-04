import { Grid } from '@mui/material'
import type { FC } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import StatsCard from './StatsCard'
import type { CallPoolStats } from './adapter'
import { request } from './adapter'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { useCallPoolDetails } from 'domains/data'

const Stats: FC = () => {
  const { callPool } = useCallPoolDetails()
  const [data, setData] = useState<CallPoolStats>({} as any)
  const cardList = [
    {
      price: (
        <div>
          <NumberDisplay value={data.accumulativePremium} abbreviate={{}} symbol={'ETH'} />
        </div>
      ),
      title: 'AccumulativePremium',
    },
    {
      price: (
        <div>
          <NumberDisplay value={data.totalNFTSales} abbreviate={{}} symbol={'ETH'} />
        </div>
      ),
      title: 'TotalNFTSales',
    },
    {
      price: (
        <div>
          <NumberDisplay value={data.totalDepositedNFTs} abbreviate={{}} symbol={'ETH'} />
        </div>
      ),
      title: 'TotalDepositedNFTs',
    },
    {
      price: (
        <div>
          <NumberDisplay value={data.totalOptionContracts} abbreviate={{}} symbol={'ETH'} />
        </div>
      ),
      title: 'TotalOptionContracts',
    },
  ]

  useEffect(() => {
    request({
      nftAddress: callPool.address.CallPools,
      subgraphName: 'rockgold0911/nftcall',
    }).then((data) => {
      if (data[0]) setData(data[0])
    })
  }, [callPool.address.CallPools])

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
