import { Fragment } from 'react'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'

const Layout: FCC = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Fragment>
  )
}

export default Layout
