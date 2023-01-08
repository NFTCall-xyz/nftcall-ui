import type { CallPoolService } from 'lib/protocol/typechain/nftcall'
import type { BalanceOfBaseData } from './getBalanceOfBaseData'
import { getBalanceOfBaseData } from './getBalanceOfBaseData'

export type BalanceOfProps = {
  callPoolService: CallPoolService
  user: string
  callPools: string[]
}

export const balanceOfRequest = ({ callPoolService, user, callPools }: BalanceOfProps) => {
  const promises: any[] = []
  const returnValue: BalanceOfBaseData[] = []

  callPools.forEach((callPool) => {
    promises.push(
      callPoolService
        .balanceOf({ callPool, user })
        .then((value) => returnValue.push(getBalanceOfBaseData(callPool, user, value)))
    )
  })
  return Promise.all(promises).then(() => returnValue)
}

export type BalanceOfSliceState = Awaited<ReturnType<typeof balanceOfRequest>>
