import type { GetAssetsProps, NFTOracleService } from 'lib/protocol/typechain/nftcall/NFTOracleService'
import { getNFTOracleBaseData } from './getNFTOracleBaseData'

export type NFTOracleProps = GetAssetsProps & {
  nftOracleService: NFTOracleService
}

export const nftOracleRequest = ({ nftOracleService, ...props }: NFTOracleProps) => {
  return nftOracleService.getAssets(props).then((data) => getNFTOracleBaseData(props.nfts, data))
}

export type NFTOracleSliceState = Awaited<ReturnType<typeof nftOracleRequest>>
