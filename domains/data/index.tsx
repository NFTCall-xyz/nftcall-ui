import NetworkProvider, { createNetworkContext } from './network'
import NFTProvider, { createNFTContext } from './nft'
import CallPoolsProvider, { createCallPoolsContext } from './callPools'
import CallPoolDetailsProvider, { createCallPoolDetailsContext } from './callPoolDetails'

const Provider: FCC = ({ children }) => {
  return (
    <NetworkProvider>
      <NFTProvider>
        <CallPoolsProvider>
          <CallPoolDetailsProvider>{children}</CallPoolDetailsProvider>
        </CallPoolsProvider>
      </NFTProvider>
    </NetworkProvider>
  )
}

export default Provider

export const useNetwork = createNetworkContext()
export const useNFT = createNFTContext()
export const useCallPools = createCallPoolsContext()
export const useCallPoolDetails = createCallPoolDetailsContext()
