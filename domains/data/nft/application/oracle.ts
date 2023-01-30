import { useControllers } from 'domains'
import { useMemo } from 'react'

import { useNetwork } from 'domains/data'

import { useOracleStateData } from 'store/oracle/useOracleStateData'

export const useOracle = () => {
  const returnValue = useOracleStateData()
  const {
    address,
    markets,
    contracts: { nftOracleService },
  } = useNetwork()
  const { nft } = useControllers()
  const query = useMemo(
    () => ({
      nftOracleService,
      nftOracle: address.NFTOracle,
      nfts: markets.map((market) => market.address.NFT),
    }),
    [address.NFTOracle, markets, nftOracleService]
  )
  nft.nftOracle.usePolling(query, (query) => !query.nfts.length, 1000 * 60 * 15)
  return returnValue
}
