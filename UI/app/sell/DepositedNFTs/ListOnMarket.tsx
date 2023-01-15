import type { FC } from 'react'
import { useMemo, useCallback } from 'react'
import { transaction } from 'domains/controllers/adapter/transaction'
import Switch from '@mui/material/Switch'
import { useWallet } from 'domains'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import { useNetwork } from 'domains/data'
import type { NFTActions } from 'domains/data/nft/types'
import type { DepositedNFT } from './NFTCard'

export type ListOnMarketProps = {
  loading: boolean
  checked: boolean
  nft: DepositedNFT
  nftActions: NFTActions
}

const ListOnMarket: FC<ListOnMarketProps> = ({
  checked,
  loading,
  nft: { callPoolAddress, tokenId },
  nftActions: { setStatus, setLoading },
}) => {
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
