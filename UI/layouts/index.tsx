import ChainDialog from 'lib/protocol/components/wallet/ChainDialog'
import ConnectDialog from 'lib/protocol/components/wallet/ConnectDialog'

import NFTLayout from './layout-nft'
import type { LayoutProps } from './layout-nft/types'

const ActiveLayout: FCC<LayoutProps> = (props) => {
  return <NFTLayout {...props} />
}
const Layout: FCC = ({ children }) => {
  return (
    <ActiveLayout title="title">
      {children}
      <ChainDialog />
      <ConnectDialog />
    </ActiveLayout>
  )
}

export default Layout
