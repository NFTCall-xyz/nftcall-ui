import { Grid, Button, Stack } from '@mui/material'
import type { FC } from 'react'

import StatsCard from './StatsCard'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { useCallPools } from 'domains/data'

import TokenIcon from 'lib/protocol/components/TokenIcon'
import { useRouter } from 'next/router'
import { useUserStats } from 'domains/data/callPools/hooks/useUserStats'
import { useTranslation } from 'next-i18next'

const Stats: FC = () => {
  useUserStats()
  const { allCallPool } = useCallPools()
  const router = useRouter()
  const { t } = useTranslation('app-sell')

  const cardList = [
    {
      price: (
        <Stack spacing={2} direction="row" justifyContent="space-between">
          <Stack spacing={0.5} direction="row" alignItems="center">
            <TokenIcon symbol={'ETH'} sx={{ width: 24, height: 24 }} />
            <NumberDisplay value={allCallPool.balanceOf} abbreviate={{}} />
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
    },
    {
      price: (
        <Stack spacing={0.5} direction="row" alignItems="center">
          <TokenIcon symbol={'ETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={allCallPool.userStats.accumulativeEarnings} abbreviate={{}} />
        </Stack>
      ),
      title: 'accruedEarnings',
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
