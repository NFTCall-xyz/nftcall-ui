import { useMemo } from 'react'
import { useAppSelector } from 'store'
import { balanceOfSelect } from './balanceOf'
import { getBalanceOfData } from './balanceOf/adapter/getBalanceOfData'
import { previewOpenCallSelect } from './previewOpenCall'
import { getPreviewOpenCallData } from './previewOpenCall/adapter/getPreviewOpenCallData'
import { statsSelect } from './stats'
import { getStatsData } from './stats/adapter/getStatsData'
import { userStatsSelect } from './userStats'
import { getUserStatsData } from './userStats/adapter/getUserStatsData'

export const useCallPoolStateData = () => {
  const balanceOfBaseData = useAppSelector(balanceOfSelect.selectData)
  const previewOpenCallBaseData = useAppSelector(previewOpenCallSelect.selectData)
  const statsBaseData = useAppSelector(statsSelect.selectData)
  const userStatsBaseData = useAppSelector(userStatsSelect.selectData)
  const returnValue = useMemo(() => {
    return {
      balanceOf: getBalanceOfData(balanceOfBaseData),
      previewOpenCall: getPreviewOpenCallData(previewOpenCallBaseData),
      stats: getStatsData(statsBaseData),
      userStats: getUserStatsData(userStatsBaseData),
    }
  }, [balanceOfBaseData, previewOpenCallBaseData, statsBaseData, userStatsBaseData])
  return returnValue
}
