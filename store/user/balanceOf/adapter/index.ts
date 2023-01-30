import type { Provider } from 'lib/protocol/provider/common-static-json-rpc-provider'

import { getBalanceOfBaseData } from './getBalanceOfBaseData'

export type BalanceOfProps = {
  provider: Provider
  user: string
}

export const balanceOfRequest = ({ provider, user }: BalanceOfProps) => {
  return provider.getBalance(user).then((data) => getBalanceOfBaseData(data))
}

export type BalanceOfSliceState = Awaited<ReturnType<typeof balanceOfRequest>>
