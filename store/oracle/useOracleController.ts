import { useCallback } from 'react'

import { useNFTOracleController } from './nftOracle'

export const useOracleController = () => {
  const nftOracleController = useNFTOracleController()
  const updateData = useCallback(() => {}, [])
  return { nftOracle: nftOracleController, updateData }
}
