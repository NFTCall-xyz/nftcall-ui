import { useAppSelector } from 'store'
import { balanceOfSelect } from './balanceOf'
import { previewOpenCallSelect } from './previewOpenCall'

export const useCallPoolStateData = () => {
  const balanceOf = useAppSelector(balanceOfSelect.selectData)
  const previewOpenCall = useAppSelector(previewOpenCallSelect.selectData)
  return { balanceOf, previewOpenCall }
}
