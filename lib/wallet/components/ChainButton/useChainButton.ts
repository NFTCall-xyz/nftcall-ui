import { useWallet } from 'domains'

export function useChainButton() {
  const {
    network,
    dialogs: {
      chainDialog: { open },
    },
  } = useWallet()

  return { network, open }
}
