import { Grid, Button, Stack } from '@mui/material'
import type { FC } from 'react'

import StatsCard from './StatsCard'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { useCallPools } from 'domains/data'

import TokenIcon from 'lib/protocol/components/TokenIcon'
import { useUserStats } from './hooks/useUserStats'

const Stats: FC = () => {
  useUserStats()
  const { allCallPool } = useCallPools()

  // const {
  //   contracts: { callPoolService },
  // } = useNetwork()
  // const { networkAccount } = useWallet()
  // const sendTransaction = useSendTransaction()
  // const fn = useCallback(
  //   (props: ClaimProps) => {
  //     return transaction({
  //       createTransaction: callPoolService.claim(props),
  //       setStatus: () => {},
  //       sendTransaction,
  //       isOnlyApprove: false,
  //     })
  //   },
  //   [callPoolService, sendTransaction]
  // )

  const cardList = [
    {
      price: (
        <Stack spacing={2} direction="row" justifyContent='space-between'>
          <Stack spacing={1} direction="row" alignItems='center'>
            <TokenIcon symbol={'ETH'} sx={{ width: 24, height: 24 }} />
            <NumberDisplay value={allCallPool.balanceOf} abbreviate={{}} />
          </Stack>
          <Button
            disabled={allCallPool.balanceOf.isZero()}
            onClick={() => {
              // fn({
              //   callPool: callPool.address.CallPool,
              //   user: networkAccount,
              //   amount: '-1',
              // }).then(() => {
              //   request()
              // })
            }}
          >
            Claim
          </Button>
        </Stack>
      ),
      title: 'claimable',
    },
    {
      price: (
        <Stack spacing={1} direction="row" alignItems='center'>
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
