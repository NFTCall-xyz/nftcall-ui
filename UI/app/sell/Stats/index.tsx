import { Grid, Button, Stack } from '@mui/material'
import type { FC } from 'react'
import { useCallback } from 'react'
import { useEffect, useState } from 'react'

import StatsCard from './StatsCard'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { useCallPoolDetails, useNetwork } from 'domains/data'
import { toBN, weiToValue } from 'lib/math'
import { useWallet } from 'domains'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import { transaction } from 'domains/controllers/adapter/transaction'
import type { ClaimProps } from 'lib/protocol/typechain/nftcall'

import type { UserStats } from './adapter'
import { request as requestStats } from './adapter'
import TokenIcon from 'lib/protocol/components/TokenIcon'

const Stats: FC = () => {
  const {
    contracts: { callPoolService },
  } = useNetwork()
  const [data, setData] = useState<UserStats>({} as any)
  const [balanceOf, setBalanceOf] = useState(toBN(0))
  const { callPool } = useCallPoolDetails()
  const { networkAccount } = useWallet()
  const sendTransaction = useSendTransaction()
  const fn = useCallback(
    (props: ClaimProps) => {
      return transaction({
        createTransaction: callPoolService.claim(props),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
    },
    [callPoolService, sendTransaction]
  )
  const request = useCallback(() => {
    if (!networkAccount) return
    callPoolService
      .balanceOf({
        callPool: callPool.address.CallPool,
        user: networkAccount,
      })
      .then((data) => {
        setBalanceOf(weiToValue(data, 18))
      })

    requestStats({ userAddress: networkAccount, subgraphName: 'rockgold0911/nftcall' }).then((data) => {
      if (data[0]) setData(data[0])
    })
  }, [callPool.address.CallPool, callPoolService, networkAccount])

  useEffect(() => {
    request()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [networkAccount])

  const cardList = [
    {
      price: (
        <Stack spacing={2} direction="row">
          <Stack spacing={1} direction="row">
            <TokenIcon symbol={'ETH'} sx={{ width: 24, height: 24 }} />
            <NumberDisplay value={balanceOf} abbreviate={{}} />
          </Stack>
          <Button
            disabled={balanceOf.isZero()}
            onClick={() => {
              fn({
                callPool: callPool.address.CallPool,
                user: networkAccount,
                amount: '-1',
              }).then(() => {
                request()
              })
            }}
          >
            Claim
          </Button>
        </Stack>
      ),
      title: 'ClaimablePremium',
    },
    {
      price: (
        <Stack spacing={1} direction="row">
          <TokenIcon symbol={'ETH'} sx={{ width: 24, height: 24 }} />
          <NumberDisplay value={data.accumulativeEarnings} abbreviate={{}} />
        </Stack>
      ),
      title: 'AccumulativeEarnings',
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
