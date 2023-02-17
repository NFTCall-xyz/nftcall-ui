// https://api.opensea.io/api/v1/asset_contract/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
import { useMemo } from 'react'

import BAYC from './adapter/BAYC.json'
// https://api.opensea.io/api/v1/asset_contract/0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949
import Beanz from './adapter/Beanz.json'
// https://api.opensea.io/api/v1/asset_contract/0x34eebee6942d8def3c125458d1a86e0a897fd6f9
import Checks from './adapter/Checks.json'
// https://api.opensea.io/api/v1/asset_contract/0x60E4d786628Fea6478F785A6d7e704777c86a7c6
import MAYC from './adapter/MAYC.json'
// https://api.opensea.io/api/v1/asset_contract/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258
import Otherdeed from './adapter/Otherdeed.json'
// https://api.opensea.io/api/v1/asset_contract/0x39ee2c7b3cb80254225884ca001f57118c8f21b6
import Potatoz from './adapter/Potatoz.json'
// https://api.opensea.io/api/v1/asset_contract/0x231d3559aa848bf10366fb9868590f01d34bf240
import Valhalla from './adapter/Valhalla.json'
import { getCollection } from './adapter/getCollection'

export const useCollections = () => {
  const returnValue = useMemo(() => {
    return {
      BAYC: getCollection(BAYC),
      MAYC: getCollection(MAYC),
      Beanz: getCollection(Beanz),
      Potatoz: getCollection(Potatoz),
      Valhalla: getCollection(Valhalla),
      Checks: getCollection(Checks),
      Otherdeed: getCollection(Otherdeed),
    }
  }, [])
  return returnValue
}
