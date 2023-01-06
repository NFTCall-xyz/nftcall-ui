import { useMemo } from 'react'
import { getCollection } from './adapter/getCollection'

// https://api.opensea.io/api/v1/asset_contract/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
import BAYC from './adapter/BAYC.json'

// https://api.opensea.io/api/v1/asset_contract/0x60E4d786628Fea6478F785A6d7e704777c86a7c6
import MAYC from './adapter/MAYC.json'

export const useCollections = () => {
  const returnValue = useMemo(() => {
    return {
      BAYC: getCollection(BAYC),
      MAYC: getCollection(MAYC),
    }
  }, [])
  return returnValue
}
