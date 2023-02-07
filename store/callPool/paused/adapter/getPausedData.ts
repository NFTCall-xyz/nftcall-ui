import type { PausedBaseData } from './getPausedBaseData'

export type PausedData = {
  callPool: string
  value: boolean
}

export const getPausedData = (pausedBaseData: PausedBaseData[]): PausedData[] => {
  if (!pausedBaseData) return []
  return pausedBaseData
}
