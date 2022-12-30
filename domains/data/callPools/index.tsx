import { createContext } from 'app/utils/createContext'
import { toBN } from 'lib/math'

export type CallPool = {
  name: string
  symbol: string
  floorPrice: BN
  depositedItems: number
  address: {
    CallPools: string
  }
}

const useCallPoolsService = () => {
  return [
    {
      name: 'Bored Ape Yacht Club',
      symbol: 'ETH',
      floorPrice: toBN('81.12'),
      depositedItems: 15,
      address: {
        CallPools: '0x2ee8A9E53D4f7871160Dc29442fE3730228F6a59',
      },
    } as CallPool,
    // {
    //   name: 'Bored Ape Yacht Club',
    //   symbol: 'ETH',
    //   floorPrice: toBN('30.12'),
    //   depositedItems: 10,
    // } as CallPool,
  ]
}
const { Provider: CallPoolsProvider, createUseContext } = createContext(useCallPoolsService)
export const createCallPoolsContext = createUseContext

export default CallPoolsProvider
