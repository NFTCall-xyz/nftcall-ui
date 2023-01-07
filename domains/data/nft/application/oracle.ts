import { useControllers } from 'domains'
import { useNetwork } from 'domains/data'
import { useMemo } from 'react'
import { useNftOracleStateData } from 'store/nftcallProtocol/nftOracle/useNftOracleStateData'

export const useOracle = () => {
  const returnValue = useNftOracleStateData()
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
  nft.oracle.usePolling(query, (query) => !query.nfts.length, 1000 * 60 * 15)
  return returnValue
}
