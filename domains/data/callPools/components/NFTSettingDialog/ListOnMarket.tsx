import { useWallet } from 'domains'
import type { FC } from 'react'
import { useCallback, useMemo } from 'react'

import Switch from '@mui/material/Switch'

import { transaction } from 'domains/controllers/adapter/transaction'
import { useNetwork } from 'domains/data'
import type { NFT, NFTActions } from 'domains/data/nft/types'
import { NFTStatus } from 'domains/data/nft/types'

import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'

export type ListOnMarketProps = {
  loading: boolean
  checked: boolean
  nft: NFT
  nftActions: NFTActions
}

const ListOnMarket: FC<ListOnMarketProps> = ({ checked, loading, nft, nftActions }) => {
  const { callPoolAddress, tokenId } = nft || ({} as undefined)
  const { setStatus, setLoading } = nftActions || ({} as undefined)
  const {
    contracts: { callPoolService },
  } = useNetwork()
  const { account } = useWallet()
  const sendTransaction = useSendTransaction()
  const query = useMemo(
    () => ({
      callPool: callPoolAddress,
      user: account,
      tokenIds: [tokenId],
    }),
    [callPoolAddress, account, tokenId]
  )
  const relistNFT = useCallback(() => {
    setLoading(true)
    return transaction({
      createTransaction: callPoolService.relistNFT(query),
      setStatus: () => {},
      sendTransaction,
      isOnlyApprove: false,
    })
      .then(() => setStatus(NFTStatus.Listed))
      .finally(() => setLoading(false))
  }, [callPoolService, query, sendTransaction, setLoading, setStatus])
  const takeNFTOffMarket = useCallback(() => {
    setLoading(true)
    return transaction({
      createTransaction: callPoolService.takeNFTOffMarket(query),
      setStatus: () => {},
      sendTransaction,
      isOnlyApprove: false,
    })
      .then(() => setStatus(NFTStatus.Deposited))
      .finally(() => setLoading(false))
  }, [callPoolService, query, sendTransaction, setLoading, setStatus])

  return (
    <Switch
      checked={checked}
      disabled={loading}
      onChange={() => {
        if (checked) {
          takeNFTOffMarket()
        } else {
          relistNFT()
        }
      }}
    />
  )
}

export default ListOnMarket
