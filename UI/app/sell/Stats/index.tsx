import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import type { FC } from 'react'

import { Button, Grid, Stack } from '@mui/material'

import { useAppSell } from 'domains/pages/app'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import StatsCard from './StatsCard'

const Stats: FC = () => {
  const { stats } = useAppSell()
  const router = useRouter()
  const { t } = useTranslation('app-sell')

  const cardList = [
    {
      price: (
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <Stack spacing={0.5} direction="row" alignItems="center">
            <TokenIcon symbol={'ETH'} sx={{ width: 24, height: 24 }} />
            <NumberDisplay value={stats.balanceOf} abbreviate={{}} />
          </Stack>
          <Button
            onClick={() => {
              router.push('/app/claim')
            }}
            variant="contained"
            size="small"
          >
            {t('stats.claim')}
          </Button>
        </Stack>
      ),
      title: 'claimable',
      tip: 'claimableTip'
    },
    {
      price: (
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol={'ETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={stats.accumulativeEarnings} abbreviate={{}} />
        </Stack>
      ),
      title: 'accruedEarnings',
      tip: 'accruedEarningsTip'
    },
    {
      price: <NumberDisplay value={stats.APY} options="percent" />,
      title: 'APY',
      tip: 'APYTip'
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
