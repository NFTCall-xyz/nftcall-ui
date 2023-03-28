import { useMemo } from 'react'
import { useAppSelector } from 'store'

import { balanceOfSelect } from './balanceOf'
import { getBalanceOfData } from './balanceOf/adapter/getBalanceOfData'
import { previewOpenCallSelect } from './previewOpenCall'
import { getPreviewOpenCallData } from './previewOpenCall/adapter/getPreviewOpenCallData'
import { statsSelect } from './stats'
import { getStatsData } from './stats/adapter/getStatsData'
import { totalOpenInterestSelect } from './totalOpenInterest'
import { getTotalOpenInterestData } from './totalOpenInterest/adapter/getTotalOpenInterestData'
import { userStatsSelect } from './userStats'
import { getUserStatsData } from './userStats/adapter/getUserStatsData'

export const useCallPoolStateData = () => {
  const balanceOfBaseData = useAppSelector(balanceOfSelect.selectData)
  const previewOpenCallBaseData = useAppSelector(previewOpenCallSelect.selectData)
  const statsBaseData = useAppSelector(statsSelect.selectData)
  const userStatsBaseData = useAppSelector(userStatsSelect.selectData)
  const totalOpenInterestBaseData = useAppSelector(totalOpenInterestSelect.selectData)

  const balanceOf = useMemo(() => getBalanceOfData(balanceOfBaseData), [balanceOfBaseData])
  const previewOpenCall = useMemo(() => getPreviewOpenCallData(previewOpenCallBaseData), [previewOpenCallBaseData])
  const stats = useMemo(() => getStatsData(statsBaseData), [statsBaseData])
  const userStats = useMemo(() => getUserStatsData(userStatsBaseData), [userStatsBaseData])
  const totalOpenInterest = useMemo(
    () => getTotalOpenInterestData(totalOpenInterestBaseData),
    [totalOpenInterestBaseData]
  )

  return {
    balanceOf,
    previewOpenCall,
    stats,
    userStats,
    totalOpenInterest,
  }
}
