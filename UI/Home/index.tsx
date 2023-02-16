import Stack from '@mui/material/Stack'

import Benefits from './Benefits'
import BuyAndSell from './BuyAndSell'
import CTA from './CTA'
import Hero from './Hero'
import SpeculateAndHedge from './SpeculateAndHedge'
import Roadmap from './Roadmap'

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
