import { useEffect, useMemo } from 'react'

import { useNFT } from 'domains/data'

import { getWalletDataByNFTs } from 'store/nft/tokenId/wallet/adapter/getWalletData'

import type { BaseNFT } from '../types'

type UseUpdateNFTAssetsProps = BaseNFT[]
export const useUpdateNFTAssets = (props: UseUpdateNFTAssetsProps) => {
  const {
    tokenId: { updateAssets },
  } = useNFT()
  const { wallet, key } = useMemo(() => getWalletDataByNFTs(props), [props])
  useEffect(() => {
    const stop = updateAssets(wallet)
    return () => stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
}
