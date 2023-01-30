import { useMemo } from 'react'

import { useNFT } from 'domains/data'
import type { BaseNFT } from 'domains/data/nft/types'

type UseNFTAssetsDataProps = BaseNFT
export const useNFTAssetsData = (props: UseNFTAssetsDataProps) => {
  const { tokenId, nftAddress } = props || ({} as undefined)
  const {
    tokenId: { assets },
  } = useNFT()
  const nftAssetsData = useMemo(() => {
    if (!tokenId) return
    return assets.find((i) => i.token_id === tokenId && i.nftAddress === nftAddress)
  }, [assets, nftAddress, tokenId])

  return {
    nftAssetsData,
  }
}
