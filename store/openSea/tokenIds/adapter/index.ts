import type { TokenIdsBaseData } from './getTokenIdsBaseData'
import { getTokenIdsBaseData } from './getTokenIdsBaseData'

export type TokenIdsProps = {}

export const TokenIdsRequest = (props: TokenIdsProps) => {}

export type TokenIdsSliceState = Awaited<ReturnType<typeof TokenIdsRequest>>
