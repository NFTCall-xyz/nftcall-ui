import type { CallPoolService } from 'lib/protocol/typechain/nftcall'

import type { TotalOpenInterestBaseData } from './getTotalOpenInterestBaseData'
import { getTotalOpenInterestBaseData } from './getTotalOpenInterestBaseData'

export type TotalOpenInterestProps = {
  callPoolService: CallPoolService
  callPools: string[]
}

export const totalOpenInterestRequest = ({ callPoolService, callPools }: TotalOpenInterestProps) => {
  const promises: any[] = []
  const returnValue: TotalOpenInterestBaseData[] = []

  callPools.forEach((callPool) => {
    promises.push(
      callPoolService
        .totalOpenInterest({ callPool })
        .then((value) => returnValue.push(getTotalOpenInterestBaseData(callPool, value)))
    )
  })
  return Promise.all(promises).then(() => returnValue)
}

export type TotalOpenInterestSliceState = Awaited<ReturnType<typeof totalOpenInterestRequest>>
