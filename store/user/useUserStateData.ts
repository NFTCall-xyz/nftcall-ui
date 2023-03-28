import { useMemo } from 'react'
import { useAppSelector } from 'store'

import { balanceOfSelect } from './balanceOf'
import { getBalanceOfData } from './balanceOf/adapter/getBalanceOfData'

export const useUserStateData = () => {
  const balanceOfBaseData = useAppSelector(balanceOfSelect.selectData)

  const balanceOf = useMemo(() => getBalanceOfData(balanceOfBaseData), [balanceOfBaseData])

  return {
    balanceOf,
  }
}
