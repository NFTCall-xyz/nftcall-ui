import { useWallet } from 'domains'

export function useConnectButton() {
  const {
    status,
    error,
    dialogs: {
      connectDialog: { open },
    },
  } = useWallet()

  return { status, open, error }
}
