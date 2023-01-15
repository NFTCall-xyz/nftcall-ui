import type { FC } from 'react'
import { useMemo, useCallback } from 'react'
import { transaction } from 'domains/controllers/adapter/transaction'
import Switch from '@mui/material/Switch'
import { useWallet } from 'domains'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import { useNetwork } from 'domains/data'
import type { NFT, NFTActions } from 'domains/data/nft/types'

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
  const { networkAccount } = useWallet()
  const sendTransaction = useSendTransaction()
  const query = useMemo(
    () => ({
      callPool: callPoolAddress,
      user: networkAccount,
      tokenId,
    }),
    [callPoolAddress, networkAccount, tokenId]
  )
  const relistNFT = useCallback(() => {
    setLoading(true)
    return transaction({
      createTransaction: callPoolService.relistNFT(query),
      setStatus: () => {},
      sendTransaction,
      isOnlyApprove: false,
    })
      .then(() => setStatus('Listed'))
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
      .then(() => setStatus('Deposited'))
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
