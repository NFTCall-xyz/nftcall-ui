import type { GetAssetsProps, NFTOracleService } from 'lib/protocol/typechain/nftcall/NFTOracleService'

import { getOracleBaseData } from './getOracleBaseData'

export type OracleProps = GetAssetsProps & {
  nftOracleService: NFTOracleService
}

export const OracleRequest = ({ nftOracleService, ...props }: OracleProps) => {
  return nftOracleService.getAssets(props).then((data) => getOracleBaseData(props.nfts, data))
}

export type OracleSliceState = Awaited<ReturnType<typeof OracleRequest>>
