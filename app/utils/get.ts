import { normalize, toBN } from 'lib/math'
import type BigNumber from 'bignumber.js'

export const safeGet = <T>(cb: () => T): T => {
  try {
    return cb()
  } catch (error) {
    return undefined
  }
}

export const getString = <T, K extends keyof T>(obj: T, keys: K[]) => {
  return keys.reduce((o, k) => {
    o[k] = obj[k].toString()
    return o
  }, {} as Record<K, string>)
}

export const getBigNumber = <T, K extends keyof T>(obj: T, keys: K[], decimals: number) => {
  return keys.reduce((o, k) => {
    o[k] = normalize(obj[k] as any, decimals)
    return o
  }, {} as Record<K, BigNumber>)
}

export const getAddress = <T, K extends keyof T>(obj: T, keys: K[]) => {
  return keys.reduce((o, k) => {
    o[k] = (obj[k] as any).toLowerCase()
    return o
  }, {} as Record<K, string>)
}

export const getNumber = <T, K extends keyof T>(obj: T, keys: K[], decimals = 3) => {
  return keys.reduce((o, k) => {
    o[k] = toBN(obj[k] as any)
      .multipliedBy(Math.pow(10, decimals))
      .toNumber()
    return o
  }, {} as Record<K, number>)
}
