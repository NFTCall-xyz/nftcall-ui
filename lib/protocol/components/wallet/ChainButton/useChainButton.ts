import { useWallet } from 'domains'

export function useChainButton() {
  const {
    status,
    network,
    chainDialog: { open },
  } = useWallet()

  return { network, status, open }
}
