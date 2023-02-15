import Image from 'next/image'
import { Fragment } from 'react'

import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

import HeroBgGradient from '../app/BgGradient'
import BgGradientLeft01SVG from './images/bg-gradient-left01.svg'
import BgGradientLeft02SVG from './images/bg-gradient-left02.svg'
import BgGradientRight01SVG from './images/bg-gradient-right01.svg'
import BgGradientRight02SVG from './images/bg-gradient-right01.svg'

const BgGradientLeft1 = styled(Box)`
  position: absolute;
  left: 0;
  top: 90%;
  pointer-events: none;
  z-index: -1;
`

const BgGradientLeft2 = styled(Box)`
  position: absolute;
  left: 0;
  top: 90%;
  pointer-events: none;
  z-index: -1;
`

const BgGradientRight1 = styled(Box)`
  position: absolute;
  right: 0;
  top: 140%;
  pointer-events: none;
  z-index: -1;
`

const BgGradientRight2 = styled(Box)`
  position: absolute;
  right: 0;
  top: 140%;
  pointer-events: none;
  z-index: -1;
`

const BgGradient: FC = () => {
  return (
    <Fragment>
      <HeroBgGradient />
      <BgGradientLeft1>
        <Image src={BgGradientLeft01SVG} alt="bg-gradient-left01" />
      </BgGradientLeft1>
      <BgGradientLeft2>
        <Image src={BgGradientLeft02SVG} alt="bg-gradient02-left02" />
      </BgGradientLeft2>
      <BgGradientRight1>
        <Image src={BgGradientRight01SVG} alt="bg-gradient-right01" />
      </BgGradientRight1>
      <BgGradientRight2>
        <Image src={BgGradientRight02SVG} alt="bg-gradient02-right02" />
      </BgGradientRight2>
    </Fragment>
  )
}

export default BgGradient
