import { useMemo } from 'react'
import { useAppSelector } from 'store'

import { nftOracleSelect } from './nftOracle'
import { getNFTOracleData } from './nftOracle/adapter/getNFTOracleData'

export const useOracleStateData = () => {
  const nftOracleBaseData = useAppSelector(nftOracleSelect.selectData)
  const returnValue = useMemo(() => {
    return { nftOracle: getNFTOracleData(nftOracleBaseData) }
  }, [nftOracleBaseData])
  return returnValue
}
