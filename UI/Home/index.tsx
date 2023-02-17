import Stack from '@mui/material/Stack'

import Benefits from './Benefits'
import BuyAndSell from './BuyAndSell'
import CTA from './CTA'
import Hero from './Hero'
import Roadmap from './Roadmap'
import SpeculateAndHedge from './SpeculateAndHedge'

const Home = () => {
  return (
    <Stack spacing={16}>
      <Hero />
      <Benefits />
      <BuyAndSell />
      <SpeculateAndHedge />
      <Roadmap />
      <CTA />
    </Stack>
  )
}

export default Home
