import { Grid } from '@mui/material'
import { useCallPools } from 'domains/data'
import type { FC } from 'react'

import CallPoolCard from './CallPoolCard'

const Stats: FC = () => {
  const { callPools } = useCallPools()
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

export default Stats
