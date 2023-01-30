import { useWallet } from 'domains'
import { useMemo } from 'react'

import type { Provider } from 'lib/protocol/provider/common-static-json-rpc-provider'

export const useProvider = () => {
  const { ethereum } = useWallet()
  const provider: Provider = useMemo(() => ethereum, [ethereum])
  return provider
}
