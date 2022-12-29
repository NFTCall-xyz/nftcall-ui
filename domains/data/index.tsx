import NetworkProvider, { createNetworkContext } from './network'

const Provider: FCC = ({ children }) => {
  return <NetworkProvider>{children}</NetworkProvider>
}

export default Provider

export const useNetwork = createNetworkContext()
