import { useCallback } from 'react'
import { useOracleController } from './oracle'

export const useNFTOracleController = () => {
  const oracleController = useOracleController()
  const updateData = useCallback(() => {}, [])
  return { oracle: oracleController, updateData }
}
