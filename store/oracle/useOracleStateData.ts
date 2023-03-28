import { useMemo } from 'react'
import { useAppSelector } from 'store'

import { nftOracleSelect } from './nftOracle'
import { getNFTOracleData } from './nftOracle/adapter/getNFTOracleData'

export const useOracleStateData = () => {
  const nftOracleBaseData = useAppSelector(nftOracleSelect.selectData)

  const nftOracle = useMemo(() => getNFTOracleData(nftOracleBaseData), [nftOracleBaseData])

  return {
    nftOracle,
  }
}
