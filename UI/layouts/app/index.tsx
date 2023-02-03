import { Fragment } from 'react'

import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import Image from 'next/image'
import BgGradient01SVG from './images/bg-gradient01.svg'
import BgGradient02SVG from './images/bg-gradient02.svg'
import BgGradient03SVG from './images/bg-gradient03.svg'

const BgGradient1 = styled(Box)`
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
`

const BgGradient2 = styled(Box)`
  position: absolute;
  right: 0;
  top: 0;
  pointer-events: none;
`

const BgGradient3 = styled(Box)`
  position: absolute;
  right: 0;
  top: 0%;
  pointer-events: none;
`

const Layout: FCC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <BgGradient1>
        <Image src={BgGradient01SVG} alt='bg-gradient01' />
      </BgGradient1>
      <BgGradient2>
        <Image src={BgGradient02SVG} alt='bg-gradient02' />
      </BgGradient2>
      <BgGradient3>
        <Image src={BgGradient03SVG} alt='bg-gradient03' />
      </BgGradient3>
    </Fragment>
  )
}

export default Layout
