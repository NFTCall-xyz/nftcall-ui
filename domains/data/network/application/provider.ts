import { useWallet } from 'domains'
import type { Provider } from 'lib/protocol/provider/common-static-json-rpc-provider'
import { useMemo } from 'react'

export const useProvider = () => {
  const { ethereum } = useWallet()
  const provider: Provider = useMemo(() => ethereum, [ethereum])
  return provider
}
