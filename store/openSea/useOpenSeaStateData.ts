import { useAppSelector } from 'store'
import { tokenIdsSelect } from './tokenIds'

export const useOpenSeaStateData = () => {
  const tokenIds = useAppSelector(tokenIdsSelect.selectData)
  return { tokenIds }
}
