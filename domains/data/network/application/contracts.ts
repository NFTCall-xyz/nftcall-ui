import { useMemo } from 'react'
import type { Provider } from 'lib/protocol/provider/common-static-json-rpc-provider'

import { ERC20Service } from 'lib/protocol/typechain/erc20'
import { ERC721Service } from 'lib/protocol/typechain/erc721-contract'
import { CallPoolService } from 'lib/protocol/typechain/nftcall'

export const useContracts = (provider: Provider) => {
  const contracts = useMemo(() => {
    return {
      callPoolService: new CallPoolService(provider),
      erc20Service: new ERC20Service(provider),
      erc721Service: new ERC721Service(provider),
    }
  }, [provider])

  // contracts.ChainlinkService.latestRound()

  return contracts
}
