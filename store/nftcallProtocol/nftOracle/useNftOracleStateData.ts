import { useMemo } from 'react'
import { useAppSelector } from 'store'
import { oracleSelect } from './oracle'
import { getOracleData } from './oracle/adapter/getOracleData'

export const useNftOracleStateData = () => {
  const oracleBaseData = useAppSelector(oracleSelect.selectData)

  const returnValue = useMemo(() => {
    return getOracleData(oracleBaseData)
  }, [oracleBaseData])
  return returnValue
}
