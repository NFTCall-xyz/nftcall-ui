import { Fragment, useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { useApp } from 'app'
import NProgress from 'lib/nprogress/components/NProgress'
import ChainDialog from 'lib/protocol/components/wallet/ChainDialog'
import ConnectDialog from 'lib/protocol/components/wallet/ConnectDialog'
import NFTDepositDialog from 'domains/data/callPools/components/NFTDepositDialog'
import NFTSettingDialog from 'domains/data/callPools/components/NFTSettingDialog'

import HomeLayout from './home'
import AppLayout from './app'

const ActiveLayout: FCC = (props) => {
  const {
    menu: { current },
  } = useApp()

  switch (current.key) {
    case 'Home':
      return <HomeLayout {...props} />
    default:
      return <AppLayout {...props} />
  }
}

const Layout: FCC = ({ children }) => {
  const { t } = useTranslation()
  const {
    menu: { current },
  } = useApp()
  const title = useMemo(() => `NFTCall - ${t('router:' + current.key)}`, [current.key, t])
  return (
    <Fragment>
      <NProgress />
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={t('layout.description')} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="NFTCall Protocol | NFT Options Trading" />
        <meta property="og:image" content="https://nftcall.xyz/logo-square.jpg" />
        <meta property="og:description" content={t('layout.description')} />
        <meta property="og:title" content="NFTCall Protocol" />
        <meta property="og:url" content="https://nftcall.xyz" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="NFTCall Protocol | NFT Options Trading" />
        <meta name="twitter:site" content="#" />
      </Head>
      <ActiveLayout>
        {children}
        <ChainDialog />
        <ConnectDialog />
        <NFTDepositDialog />
        <NFTSettingDialog />
      </ActiveLayout>
    </Fragment>
  )
}

export default Layout
