import NetworkProvider, { createNetworkContext } from './network'
import CallPoolsProvider, { createCallPoolsContext } from './callPools'
import CallPoolDetailsProvider, { createCallPoolDetailsContext } from './callPoolDetails'

const Provider: FCC = ({ children }) => {
  return (
    <NetworkProvider>
      <CallPoolsProvider>
        <CallPoolDetailsProvider>{children}</CallPoolDetailsProvider>
      </CallPoolsProvider>
    </NetworkProvider>
  )
}

export default Provider

export const useNetwork = createNetworkContext()
export const useCallPools = createCallPoolsContext()
export const useCallPoolDetails = createCallPoolDetailsContext()
