import { useMemo } from 'react'

// https://api.opensea.io/api/v1/asset_contract/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
import BAYC from './adapter/BAYC.json'
import Beanz from './adapter/Beanz.json'
import Checks from './adapter/Checks.json'
import CloneX from './adapter/CloneX.json'
import MAYC from './adapter/MAYC.json'
import Moonbirds from './adapter/Moonbirds.json'
import Otherdeed from './adapter/Otherdeed.json'
import Potatoz from './adapter/Potatoz.json'
import Valhalla from './adapter/Valhalla.json'
import { getCollection } from './adapter/getCollection'

export const useCollections = () => {
  const returnValue = useMemo(() => {
    return {
      BAYC: getCollection('0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D', BAYC),
      MAYC: getCollection('0x60E4d786628Fea6478F785A6d7e704777c86a7c6', MAYC),
      Beanz: getCollection('0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949', Beanz),
      Potatoz: getCollection('0x39ee2c7b3cb80254225884ca001f57118c8f21b6', Potatoz),
      Valhalla: getCollection('0x231d3559aa848bf10366fb9868590f01d34bf240', Valhalla),
      Checks: getCollection('0x34eebee6942d8def3c125458d1a86e0a897fd6f9', Checks),
      Otherdeed: getCollection('0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258', Otherdeed),
      CloneX: getCollection('0x49cF6f5d44E70224e2E23fDcdd2C053F30aDA28B', CloneX),
      Moonbirds: getCollection('0x23581767a106ae21c074b2276D25e5C3e136a68b', Moonbirds),
    }
  }, [])
  return returnValue
}
