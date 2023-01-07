import { toBN, weiToValue } from 'lib/math'
import premium from './premium.json'

type getCurveIdxProps = {
  strikePriceGapIdx: number
  durationIdx: number
}
export const getCurveIdx = ({ strikePriceGapIdx, durationIdx }: getCurveIdxProps) => {
  return strikePriceGapIdx * 4 + durationIdx
}

export const curveIdxs = (() => {
  const returnValue: number[] = []
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      returnValue.push(getCurveIdx({ strikePriceGapIdx: i, durationIdx: j }))
    }
  }
  return returnValue
})()

type GetPremiumProps = {
  curveIdx: number
  vol: number
}
export const getPremium = ({ curveIdx, vol }: GetPremiumProps) => {
  if (curveIdx >= 24) throw 'Index of Premium Curve exceeds limit'
  const volIdx = vol / 500
  if (volIdx >= 99) throw 'Vol exceeds limit'
  const premiumMesh: any = premium
  const returnValue = toBN(premiumMesh[curveIdx][volIdx])
  return weiToValue(
    returnValue
      .multipliedBy((volIdx + 1) * 500 - vol)
      .plus(toBN(premiumMesh[curveIdx][volIdx + 1]).multipliedBy(vol - volIdx * 500))
      .dividedBy(500),
    5
  )
}
