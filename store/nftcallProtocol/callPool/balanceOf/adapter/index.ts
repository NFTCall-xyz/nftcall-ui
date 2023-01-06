import type { BalanceOfBaseData } from './getBalanceOfBaseData'
import { getBalanceOfBaseData } from './getBalanceOfBaseData'

export type BalanceOfProps = {}

export const BalanceOfRequest = (props: BalanceOfProps) => {}

export type BalanceOfSliceState = Awaited<ReturnType<typeof BalanceOfRequest>>
