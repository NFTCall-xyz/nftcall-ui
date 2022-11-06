import { infuraId } from 'lib/protocol/network'

import type { Connector } from '../types'

export default async function init(): Promise<Connector> {
  const { UserRejectedRequestError, WalletConnectConnector } = await import('@web3-react/walletconnect-connector')
  return {
    web3ReactConnector() {
      return new WalletConnectConnector({
        qrcode: true,
        infuraId,
      })
    },
    handleActivationError(error: Error) {
      const returnValue = { error, ignore: false }

      if (error instanceof UserRejectedRequestError) {
        returnValue.ignore = true
      }

      return returnValue
    },
  }
}
