import { createContext } from 'app/utils/createContext'
import type { CallPoolStats } from 'store/callPool/stats/adapter/getStatsData'
import type { NFTOracleData } from 'store/oracle/nftOracle/adapter/getNFTOracleData'
import type { UserCallPoolStat } from 'store/callPool/userStats/adapter/getUserStatsData'
import type { Market } from '../network/adapter/markets'
import type { BaseCollection } from '../nft/application/collections/adapter/getCollection'
import { useBalanceOf } from './application/balanceOf'
import { useStats } from './application/stats'
import { useCallPoolsDialogs } from './application/dialogs'
import { useTotalOpenInterest } from './application/totalOpenInterest'
import { useCallPoolsData } from './application/callPoolsData'
import { useAllCallPoolsData } from './application/allCallPoolsData'

export type CallPool = Market & {
  collection: BaseCollection
  // depositedItems: number
  nftOracle: NFTOracleData

  balanceOf: BN
  stats: CallPoolStats & {
    totalListedNFTs?: number
  }
  userStats: UserCallPoolStat
  totalOpenInterest: number
}

const useCallPoolsService = () => {
  const dialogs = useCallPoolsDialogs()
  const callPools = useCallPoolsData()

  const allCallPool = useAllCallPoolsData(callPools)
  const balanceOf = useBalanceOf(callPools)
  const totalOpenInterest = useTotalOpenInterest(callPools)
  const stats = useStats(callPools)

  return { callPools, allCallPool, balanceOf, totalOpenInterest, stats, dialogs }
}
const { Provider: CallPoolsProvider, createUseContext } = createContext(useCallPoolsService)
export const createCallPoolsContext = createUseContext

export default CallPoolsProvider
