import { useCallback } from 'react'
import { useImmer } from 'use-immer'

import { useDialog } from 'app/hooks/useDialog'

import type { NFT } from 'domains/data/nft/types'

const useNFTDialog = () => {
  const [nft, setNFT] = useImmer<NFT>(undefined)
  const onOpen = useCallback(
    (nft: NFT) => {
      setNFT(nft)
    },
    [setNFT]
  )
  const onClose = useCallback(() => {
    setNFT(undefined)
  }, [setNFT])
  const dialog = useDialog({ onOpen, onClose })
  return {
    ...dialog,
    nft,
  }
}
const useNFTBatchDialog = () => {
  const [nfts, setNFTs] = useImmer<NFT[]>([])
  const onOpen = useCallback(
    (nfts: NFT[]) => {
      setNFTs(() => nfts)
    },
    [setNFTs]
  )
  const onClose = useCallback(() => {
    setNFTs(() => [])
  }, [setNFTs])
  const dialog = useDialog({ onOpen, onClose })
  return {
    ...dialog,
    nfts,
  }
}

export const useCallPoolsDialogs = () => {
  const nftDeposit = useNFTDialog()
  const nftSetting = useNFTDialog()
  const nftBatchDeposit = useNFTBatchDialog()
  const nftBatchSetting = useNFTBatchDialog()

  return {
    nftDeposit,
    nftSetting,
    nftBatchDeposit,
    nftBatchSetting,
  }
}
