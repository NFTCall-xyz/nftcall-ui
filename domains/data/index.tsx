import NetworkProvider, { createNetworkContext } from './network'
import NFTProvider, { createNFTContext } from './nft'
import CallPoolsProvider, { createCallPoolsContext } from './callPools'
import CallPoolDetailsProvider, { createCallPoolDetailsContext } from './callPoolDetails'
import UserProvider, { createUserContext } from './user'

const Provider: FCC = ({ children }) => {
  return (
    <NetworkProvider>
      <UserProvider>
        <NFTProvider>
          <CallPoolsProvider>
            <CallPoolDetailsProvider>{children}</CallPoolDetailsProvider>
          </CallPoolsProvider>
        </NFTProvider>
      </UserProvider>
    </NetworkProvider>
  )
}

export default Provider

export const useNetwork = createNetworkContext()
export const useUser = createUserContext()
export const useNFT = createNFTContext()
export const useCallPools = createCallPoolsContext()
export const useCallPoolDetails = createCallPoolDetailsContext()
