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
        CallPools: '0xc629d0C48D82dbc9351e7b2c4C272c49F023EB5d',
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
