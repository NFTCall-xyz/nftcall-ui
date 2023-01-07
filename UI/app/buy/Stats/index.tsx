import { Grid, Stack } from '@mui/material'
import type { FC } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import StatsCard from './StatsCard'
import type { CallPoolStats } from './adapter'
import { request } from './adapter'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { useCallPoolDetails } from 'domains/data'
import TokenIcon from 'lib/protocol/components/TokenIcon'

const Stats: FC = () => {
  const { callPool } = useCallPoolDetails()
  const [data, setData] = useState<CallPoolStats>({} as any)
  const cardList = [
    {
      price: (
        <Stack spacing={1} direction="row">
          <TokenIcon symbol={'ETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={data.accumulativePremium} abbreviate={{}} />
        </Stack>
      ),
      title: 'AccumulativePremium',
    },
    {
      price: (
        <Stack spacing={1} direction="row">
          <TokenIcon symbol={'ETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={data.totalNFTSales} abbreviate={{}} />
        </Stack>
      ),
      title: 'TotalNFTSales',
    },
    {
      price: (
        <div>
          <NumberDisplay value={data.totalDepositedNFTs} abbreviate={{}} />
        </div>
      ),
      title: 'TotalDepositedNFTs',
    },
    {
      price: (
        <div>
          <NumberDisplay value={data.totalOptionContracts} abbreviate={{}} />
        </div>
      ),
      title: 'TotalOptionContracts',
    },
  ]

  useEffect(() => {
    request({
      nftAddress: callPool.address.CallPool,
      subgraphName: 'rockgold0911/nftcall',
    }).then((data) => {
      if (data[0]) setData(data[0])
    })
  }, [callPool.address.CallPool])

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
