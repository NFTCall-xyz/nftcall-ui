import { useWallet } from 'domains'
import { useMemo } from 'react'

import { ERC20Service } from 'lib/protocol/typechain/erc20'
import { ERC721Service } from 'lib/protocol/typechain/erc721-contract'
import { CallPoolService } from 'lib/protocol/typechain/nftcall'
import { MockNFTService } from 'lib/protocol/typechain/nftcall-mock-nft'
import { NFTOracleService } from 'lib/protocol/typechain/nftcall/NFTOracleService'

export const useContracts = () => {
  const { provider } = useWallet()
  const contracts = useMemo(() => {
    return {
      mockNFTService: new MockNFTService(provider),
      nftOracleService: new NFTOracleService(provider),
      callPoolService: new CallPoolService(provider),
      erc20Service: new ERC20Service(provider),
      erc721Service: new ERC721Service(provider),
    }
  }, [provider])

  // contracts.ChainlinkService.latestRound()

  return contracts
}
