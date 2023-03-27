import { useWallet } from 'domains'

export function useConnectButton() {
  const {
    status,
    dialogs: {
      connectDialog: { open },
    },
  } = useWallet()

  return { status, open }
}
