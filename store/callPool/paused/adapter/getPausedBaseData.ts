export type PausedBaseData = {
  callPool: string
  value: boolean
}

export const getPausedBaseData = (callPool: string, value: boolean): PausedBaseData => {
  return { callPool, value }
}
