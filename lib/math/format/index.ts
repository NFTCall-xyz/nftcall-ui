import { useRouter } from 'next/router'
import { useCallback, useMemo } from 'react'

import { toBN } from '../BN'
import type { BNValue } from '../types'
import { abbreviate } from './abbreviate'
import { toFixed } from './toFixed'

const createUSDFormatOptions = () => ({
  style: 'currency',
  maximumFractionDigits: 2,
  minimumFractionDigits: 0,
  currency: 'USD',
  currencyDisplay: 'narrowSymbol',
})

const createPercentFormatOptions = () => ({
  style: 'percent',
  maximumFractionDigits: 2,
})

const createSymbolFormatOptions = () => ({
  maximumFractionDigits: 2,
})

const getOptions = (fn: any, options: any) => ({
  ...fn(),
  ...options,
})

const numberFormatOptions = (
  type: 'number' | 'USD' | 'percent' | 'symbol' = 'number',
  options: Intl.NumberFormatOptions = {}
): Intl.NumberFormatOptions => {
  switch (type) {
    case 'number':
      return options
    case 'USD':
      return getOptions(createUSDFormatOptions, options)
    case 'percent':
      return getOptions(createPercentFormatOptions, options)
    case 'symbol':
      return getOptions(createSymbolFormatOptions, options)
  }
}

export const useNumberFormat = () => {
  const router = useRouter()

  const numberFormat = useCallback(
    (value: BNValue, options: Intl.NumberFormatOptions = {}) => {
      const numberFormat = new Intl.NumberFormat(router.locale, options)
      const bn = toBN(value)
      return bn.isNaN() ? '-' : numberFormat.format(bn.toNumber())
    },
    [router.locale]
  )

  const returnValue = useMemo(
    () => ({
      format: numberFormat,
      options: numberFormatOptions,
      abbreviate,
      toFixed,
    }),
    [numberFormat]
  )

  return returnValue
}
