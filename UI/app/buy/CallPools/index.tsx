import { Grid } from '@mui/material'
import { useAppBuy } from 'domains/pages/app'
import type { FC } from 'react'

import CallPoolCard from './CallPoolCard'

const CallPools: FC = () => {
  const { callPools } = useAppBuy()
  return (
    <div>
      <Grid container spacing={2}>
        {callPools.map((callPool, index) => (
          <Grid item lg={3} sm={6} xs={12} key={index}>
            <CallPoolCard callPool={callPool} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default CallPools
