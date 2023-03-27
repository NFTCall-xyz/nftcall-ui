import { CoinbaseWallet } from '@web3-react/coinbase-wallet'
import { initializeConnector } from '@web3-react/core'

import { ChainId } from 'lib/wallet/constant/chains'

import { getChainInformationByChainId } from '../constant/chains'

export const [coinbaseWallet, hooks] = initializeConnector<CoinbaseWallet>(
  (actions) =>
    new CoinbaseWallet({
      actions,
      options: {
        url: getChainInformationByChainId(ChainId.ethereum).publicJsonRPCUrl[0],
        appName: 'NFTCall',
      },
    })
)
