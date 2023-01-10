import { useDialog } from 'app/hooks/useDialog'
import type { NFT } from 'domains/data/nft/types'
import { useCallback, useState } from 'react'

const useNFTDialog = () => {
  const [nft, setNFT] = useState<NFT>()
  const onOpen = useCallback((nft: NFT) => {
    setNFT(nft)
  }, [])
  const onClose = useCallback(() => {
    setNFT(undefined)
  }, [])
  const dialog = useDialog({ onOpen, onClose })
  return {
    ...dialog,
    nft,
  }
}

export const useCallPoolsDialogs = () => {
  const nftDeposit = useNFTDialog()
  const nftSetting = useNFTDialog()

  return {
    nftDeposit,
    nftSetting,
  }
}
