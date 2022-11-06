import { useDialog } from 'app/hooks/useDialog'

export function useChainDialog() {
  const { visible, open, close } = useDialog()

  return { visible, open, close }
}
