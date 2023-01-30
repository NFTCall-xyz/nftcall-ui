import { useApp } from 'app'
import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import { Fragment, useMemo } from 'react'

import NFTDepositDialog from 'domains/data/callPools/components/NFTDepositDialog'
import NFTSettingDialog from 'domains/data/callPools/components/NFTSettingDialog'

import NProgress from 'lib/nprogress/components/NProgress'
import ChainDialog from 'lib/protocol/components/wallet/ChainDialog'
import ConnectDialog from 'lib/protocol/components/wallet/ConnectDialog'

import AppLayout from './app'
import HomeLayout from './home'

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
  const seoTitle = 'NFTCall | Speculate or Earn Premiums from NFT Options'
  const desc =
    'NFTCall is a physically-settled, peer-to-peer NFT options trading platform that allows NFT holders to earn premiums and sell NFTs at a higher price while allowing NFT investors to buy NFTs with high leverage but with limited losses.'
  const title = useMemo(
    () => (current.key === 'Home' ? seoTitle : `NFTCall | ${t('router:' + current.key)}`),
    [current.key, t]
  )

  return (
    <Fragment>
      <NProgress />
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={desc} />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={seoTitle} />
        <meta property="og:image" content="https://nftcall.xyz/logo-square.jpg" />
        <meta property="og:description" content={desc} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:url" content="https://nftcall.xyz" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:site" content="@nftcall_xyz" />
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
