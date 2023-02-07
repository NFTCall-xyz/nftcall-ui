import type { CallPoolService } from 'lib/protocol/typechain/nftcall'

import type { PausedBaseData } from './getPausedBaseData'
import { getPausedBaseData } from './getPausedBaseData'

export type PausedProps = {
  callPoolService: CallPoolService
  callPools: string[]
}

export const pausedRequest = ({ callPoolService, callPools }: PausedProps) => {
  const promises: any[] = []
  const returnValue: PausedBaseData[] = []

  callPools.forEach((callPool) => {
    promises.push(
      callPoolService.paused({ callPool }).then((value) => returnValue.push(getPausedBaseData(callPool, value)))
    )
  })
  return Promise.all(promises).then(() => returnValue)
}

export type PausedSliceState = Awaited<ReturnType<typeof pausedRequest>>
