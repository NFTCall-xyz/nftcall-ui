import { useWallet } from 'domains'

export function useConnectButton() {
  const {
    status,
    error,
    connectDialog: { open },
  } = useWallet()

  return { status, open, error }
}
