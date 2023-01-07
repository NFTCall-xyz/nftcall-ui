import { useControllers } from 'domains'
import { useNetwork } from 'domains/data'
import { useMemo } from 'react'
import { useNFTOracleStateData } from 'store/nftcallProtocol/nftOracle/useNFTOracleStateData'

export const useOracle = () => {
  const returnValue = useNFTOracleStateData()
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
