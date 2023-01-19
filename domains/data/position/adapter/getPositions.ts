import { getNumber, getAddresses, getWeiToValueBN } from 'app/utils/get'
import { toBN } from 'lib/math'
import type { PositionBaseData, Position } from '../types'
import { PositionStatus } from '../types'

export const getPositions = (positions: PositionBaseData[]) => {
  if (!positions) return []
  const returnValue = positions.map((t) => {
    const timestamps = getNumber(t, ['endTime', 'exerciseTime', 'updateTimestamp'])
    const returnValue: Position = {
      ...t,
      ...timestamps,
      ...getAddresses(t, ['nftAddress', 'userAddress', 'callPoolAddress', 'nftOwnerAddress']),
      ...getWeiToValueBN(t, ['strikePrice', 'premiumToOwner', 'premiumToReserve', 'floorPrice'], 18),
      PnL: toBN(0),
      PnLInPercent: toBN(0),
      premium: toBN(0),
    }
    if (returnValue.status === PositionStatus.Unexercised) {
      const now = Date.now()
      if (returnValue.endTime < now) {
        returnValue.status = PositionStatus.Expired
      } else if (returnValue.exerciseTime > now) {
        returnValue.status = PositionStatus.NotExercisable
      } else {
        returnValue.status = PositionStatus.Exercisable
      }
    }
    const { premiumToOwner, premiumToReserve } = returnValue
    returnValue.premium = premiumToOwner.plus(premiumToReserve)

    return returnValue
  })

  return returnValue
}
