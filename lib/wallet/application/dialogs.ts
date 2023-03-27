import { useDialog } from 'app/hooks/useDialog'

export const useWalletDialogs = () => {
  const chainDialog = useDialog()
  const connectDialog = useDialog()

  return {
    chainDialog,
    connectDialog,
  }
}
