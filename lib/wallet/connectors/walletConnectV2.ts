import { initializeConnector } from '@web3-react/core'
import { WalletConnect as WalletConnectV2 } from '@web3-react/walletconnect-v2'

import { CHAIN_IDS, walletconnectId } from '../constant/chains'

export const [walletConnectV2, hooks] = initializeConnector<WalletConnectV2>(
  (actions) =>
    new WalletConnectV2({
      actions,
      options: {
        projectId: walletconnectId,
        chains: CHAIN_IDS,
        showQrModal: true,
      },
    })
)
