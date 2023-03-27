import { useWallet } from 'domains'

export const useProvider = () => {
  const { provider } = useWallet()
  return provider
}
