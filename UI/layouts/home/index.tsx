import { Fragment } from 'react'

import BgGradient from './BgGradient'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'

const Layout: FCC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Main>{children}</Main>
      <Footer />
      <BgGradient />
    </Fragment>
  )
}

export default Layout
