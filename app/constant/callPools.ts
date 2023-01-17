import { DAY } from '.'

export const MIN_STRIKE_PRICE_MAP = [
  { value: 0, label: '0%', number: 1 },
  { value: 1, label: '10%', number: 1.1 },
  { value: 2, label: '20%', number: 1.2 },
  { value: 3, label: '30%', number: 1.3 },
  { value: 4, label: '50%', number: 1.5 },
  { value: 5, label: '100%', number: 2 },
]
export const MAX_EXPRIY_TIME_MAP = [
  { value: 0, label: '3 days', number: DAY * 3 },
  { value: 1, label: '7 days', number: DAY * 7 },
  { value: 2, label: '14 days', number: DAY * 14 },
  { value: 3, label: '28 days', number: DAY * 28 },
]
