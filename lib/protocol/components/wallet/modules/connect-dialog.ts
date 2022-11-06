import { useDialog } from 'app/hooks/useDialog'

export function useConnectDialog() {
  const { visible, open, close } = useDialog()

  return { visible, open, close }
}
