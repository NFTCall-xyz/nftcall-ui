import { useAppSelector } from 'store'
import { oracleSelect } from './oracle'

export const useNftOracleStateData = () => {
  const oracle = useAppSelector(oracleSelect.selectData)
  return { oracle }
}
