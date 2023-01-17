import { toBN } from 'lib/math'

export const SECONDS_PER_YEAR = toBN('31536000')
export const USD_DECIMALS = 8
export const WEI_DECIMALS = 18
export const RAY_DECIMALS = 27
export const LTV_PRECISION = 4

export const getTimestamp = (time: number) => Math.floor(time / 1000)
export const getCurrentTimestamp = () => getTimestamp(Date.now())
export const getCurrentTime = () => Date.now()

export const HOVER = 1000 * 60 * 60
export const HalfDay = HOVER * 12
export const DAY = HalfDay * 2
export const getUTCTime = (date: any): number => {
  date = new Date(date)
  date.setUTCHours(12, 0, 0, 0)
  return date.getTime()
}
