import { Fragment, useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'

import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import type { LayoutProps } from './types'

const Layout: FCC<LayoutProps> = ({ children, ...props }) => {
  const { t } = useTranslation()
  const title = useMemo(() => `NFTCall - ${t('router:menu.' + props.title)}`, [props.title, t])
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={t('layout.description')} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="NFTCall Protocol | DeFing NFTs" />
        <meta property="og:image" content="https://app.vinci.io/logo.jpeg" />
        <meta property="og:description" content={t('layout.description')} />
        <meta property="og:title" content="NFTCall Protocol" />
        <meta property="og:url" content="https://app.vinci.io" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="NFTCall Protocol | DeFing NFTs" />
        <meta name="twitter:site" content="@VinciProtocol" />
      </Head>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Fragment>
  )
}

export default Layout
