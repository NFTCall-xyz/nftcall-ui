import type { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import type { Web3ReactHooks } from '@web3-react/core'
import { Web3ReactProvider } from '@web3-react/core'
import type { MetaMask } from '@web3-react/metamask'
import type { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'

import { coinbaseWallet, hooks as coinbaseWalletHooks } from './connectors/coinbaseWallet'
import { metaMask, hooks as metaMaskHooks } from './connectors/metaMask'
import { walletConnectV2, hooks as walletConnectV2Hooks } from './connectors/walletConnectV2'

const connectors: [MetaMask | WalletConnectV2 | CoinbaseWallet, Web3ReactHooks][] = [
  [metaMask, metaMaskHooks],
  [walletConnectV2, walletConnectV2Hooks],
  [coinbaseWallet, coinbaseWalletHooks],
]

const UseWalletProvider: FCC = ({ children }) => (
  <Web3ReactProvider connectors={connectors}>{children}</Web3ReactProvider>
)

export default UseWalletProvider
