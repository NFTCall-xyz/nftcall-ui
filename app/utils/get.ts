import type BigNumber from 'bignumber.js'
import { utils } from 'ethers'

import { toBN, weiToValue } from 'lib/math'

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

export const getWeiToValueBN = <T, K extends keyof T>(obj: T, keys: K[], decimals: number) => {
  return keys.reduce((o, k) => {
    o[k] = weiToValue(obj[k] as any, decimals)
    return o
  }, {} as Record<K, BigNumber>)
}

export const getAddresses = <T, K extends keyof T>(obj: T, keys: K[]) => {
  return keys.reduce((o, k) => {
    if (obj[k]) {
      o[k] = utils.getAddress(obj[k] as any)
    }
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
