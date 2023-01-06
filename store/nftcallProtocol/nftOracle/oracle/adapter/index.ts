import type { OracleBaseData } from './getOracleBaseData'
import { getOracleBaseData } from './getOracleBaseData'

export type OracleProps = {}

export const OracleRequest = (props: OracleProps) => {}

export type OracleSliceState = Awaited<ReturnType<typeof OracleRequest>>
