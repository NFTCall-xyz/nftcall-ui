import { MAX_EXPRIY_TIME_MAP, MIN_STRIKE_PRICE_MAP } from 'app/constant/callPools'

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
  for (let i = 0; i < MIN_STRIKE_PRICE_MAP.length; i++) {
    for (let j = 0; j < MAX_EXPRIY_TIME_MAP.length; j++) {
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
  const volatility = toBN(vol)
  const samplingPrecision = toBN(0.05)
  if (curveIdx >= 24) throw 'Index of Premium Curve exceeds limit'
  const volIdx = Math.floor(volatility.dividedBy(samplingPrecision).toNumber())
  if (volIdx >= 99) throw 'Vol exceeds limit'
  const premiumMesh: any = premium
  const returnValue = toBN(premiumMesh[curveIdx][volIdx])
  return weiToValue(
    returnValue
      .multipliedBy(samplingPrecision.multipliedBy(volIdx + 1).minus(volatility))
      .plus(
        toBN(premiumMesh[curveIdx][volIdx + 1]).multipliedBy(volatility.minus(samplingPrecision.multipliedBy(volIdx)))
      )
      .dividedBy(samplingPrecision),
    5
  )
}
