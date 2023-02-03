import { Fragment } from 'react'

import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import BgGradient from './BgGradient'

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
