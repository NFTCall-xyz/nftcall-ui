import { useNFT } from 'domains/data'
import type { BaseNFT } from 'domains/data/nft/types'
import { useMemo } from 'react'

type UseNFTAssetsDataProps = BaseNFT
export const useNFTAssetsData = ({ tokenId, nftAddress }: UseNFTAssetsDataProps) => {
  const {
    tokenId: { assets },
  } = useNFT()
  const nftAssetsData = useMemo(() => {
    return assets.find((i) => i.token_id === tokenId && i.nftAddress === nftAddress)
  }, [assets, nftAddress, tokenId])

  return {
    nftAssetsData,
  }
}
