import { Grid } from '@mui/material'

import { useAppBuy } from 'domains/pages/app'

import CallPoolCard from './CallPoolCard'

const Card: FC = () => {
  const { callPools } = useAppBuy()
  return (
    <div>
      <Grid container spacing={2}>
        {callPools.map((callPool) => (
          <Grid item lg={3} sm={6} xs={12} key={callPool.collection.name}>
            <CallPoolCard callPool={callPool} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default Card
