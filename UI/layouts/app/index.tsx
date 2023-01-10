import { Fragment } from 'react'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'

const BgGradient1 = styled(Box)`
  position: absolute;
  width: 482.59px;
  height: 615.14px;
  left: -20%;
  top: 20%;
  background: linear-gradient(90deg, rgba(26, 41, 128, 0.5) 0%, rgba(38, 208, 206, 0.5) 100%);
  filter: blur(325px);
  border-radius: 200px;
  transform: rotate(-0.33deg);
  pointer-events: none;
`

const BgGradient2 = styled(Box)`
  position: absolute;
  width: 482.59px;
  height: 615.14px;
  right: -15%;
  top: 15%;
  background: linear-gradient(90deg, rgba(26, 41, 128, 0.5) 0%, rgba(38, 208, 206, 0.5) 100%);
  filter: blur(325px);
  border-radius: 200px;
  transform: rotate(-67.37deg);
  pointer-events: none;
`

const BgGradient3 = styled(Box)`
  position: absolute;
  width: 345px;
  height: 514px;
  right: 15%;
  top: -55%;
  background: linear-gradient(90deg, #f4c4f3 0%, #fc67fa 100%);
  filter: blur(450px);
  border-radius: 200px;
  transform: rotate(-20.01deg);
  pointer-events: none;
`

const Layout: FCC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <BgGradient1 />
      <BgGradient2 />
      <BgGradient3 />
    </Fragment>
  )
}

export default Layout
