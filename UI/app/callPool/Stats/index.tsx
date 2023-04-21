import type { FC } from 'react'

import { Box, Grid, Stack } from '@mui/material'

import { useCallPoolDetails } from 'domains/data'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import StatsCard from './StatsCard'

const Stats: FC = () => {
  const { callPool } = useCallPoolDetails()

  if (!callPool) return null

  const {
    nftOracle: { price, vol },
    info: { symbol },
    stats: { totalListedNFTs, totalTradingVolume },
  } = callPool

  const cardList = [
    {
      price: (
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol={symbol} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={price} />
        </Stack>
      ),
      title: 'floorPrice',
    },
    {
      price: (
        <NumberDisplay
          value={vol}
          options="percent"
          numberFormatOptions={{
            maximumFractionDigits: 0,
          }}
        />
      ),
      title: 'vol',
    },
    {
      price: (
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol={symbol} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={totalTradingVolume} />
        </Stack>
      ),
      title: 'tradingVolume',
    },
    {
      price: <NumberDisplay value={totalListedNFTs} />,
      title: 'depositedItems',
    },
  ]

  return (
    <Box>
      <Grid container spacing={{ xs: 2, sm: 4 }}>
        {cardList.map((card, index) => (
          <Grid item lg={index === 2 ? 4 : 2.5} sm={6} xs={6} key={index}>
            <StatsCard card={card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Stats
