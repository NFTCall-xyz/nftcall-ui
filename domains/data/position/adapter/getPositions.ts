import { getNumber, getAddresses, getWeiToValueBN } from 'app/utils/get'
import type { PositionBaseData, Position } from '../types'
import { PositionStatus } from '../types'

export const getPositions = (positions: PositionBaseData[]) => {
  if (!positions) return []
  const returnValue = positions.map((t) => {
    const timestamps = getNumber(t, ['endTime', 'exerciseTime', 'updateTimestamp'])
    const returnValue: Position = {
      ...t,
      ...timestamps,
      ...getAddresses(t, ['nftAddress', 'userAddress', 'callPoolAddress']),
      ...getWeiToValueBN(t, ['strikePrice', 'premiumToOwner', 'premiumToReserve'], 18),
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
    return returnValue
  })

  return returnValue
}
