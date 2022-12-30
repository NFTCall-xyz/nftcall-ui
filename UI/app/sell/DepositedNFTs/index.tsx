import Grid from '@mui/material/Grid'
import { useWallet } from 'domains'
import { useCallback, useEffect, useMemo, useState } from 'react'
import NFTCard from './NFTCard'
import { useCallPoolDetails, useNetwork } from 'domains/data'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import type { RelistNFTProps, TakeNFTOffMarketProps, WithdrawProps } from 'lib/protocol/typechain/nftcall'
import { transaction } from 'domains/controllers/adapter/transaction'
import { getDepositedNFTs } from './getDepositedNFTs'

const DepositedNFTs = () => {
  const [NFTs, setNFTs] = useState([])
  const {
    contracts: { callPoolService },
  } = useNetwork()
  const { callPool } = useCallPoolDetails()
  const { chainId, networkAccount } = useWallet()

  const sendTransaction = useSendTransaction()
  const relistNFT = useCallback(
    (props: RelistNFTProps) => {
      return transaction({
        createTransaction: callPoolService.relistNFT(props),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
    },
    [callPoolService, sendTransaction]
  )
  const takeNFTOffMarket = useCallback(
    (props: TakeNFTOffMarketProps) => {
      return transaction({
        createTransaction: callPoolService.takeNFTOffMarket(props),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
    },
    [callPoolService, sendTransaction]
  )
  const withdraw = useCallback(
    (props: WithdrawProps) => {
      return transaction({
        createTransaction: callPoolService.withdraw(props),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
    },
    [callPoolService, sendTransaction]
  )

  const action = useMemo(() => {
    return [
      {
        name: 'Withdraw',
        onClick: (id: string) => {
          withdraw({
            callPool: callPool.address.CallPools,
            user: networkAccount,
            tokenId: id,
          })
        },
      },
      {
        name: 'RelistNFT',
        onClick: (id: string) => {
          relistNFT({
            callPool: callPool.address.CallPools,
            user: networkAccount,
            tokenId: id,
          })
        },
      },
      {
        name: 'TakeNFTOffMarket',
        onClick: (id: string) => {
          takeNFTOffMarket({
            callPool: callPool.address.CallPools,
            user: networkAccount,
            tokenId: id,
          })
        },
      },
    ]
  }, [withdraw, callPool.address.CallPools, networkAccount, relistNFT, takeNFTOffMarket])

  const nfts = useMemo(() => {
    return NFTs.map(({ tokenId }) => {
      return {
        id: tokenId,
        description: '#' + tokenId,
        minStrikePrice: 0,
        maxExpriyTime: 0,
        action,
      }
    })
  }, [NFTs, action])

  useEffect(() => {
    if (!networkAccount) return
    getDepositedNFTs({
      chainId,
      user: networkAccount,
    }).then((data) => {
      setNFTs(data)
    })
  }, [chainId, networkAccount])

  return (
    <Grid container spacing={2}>
      {nfts.map((nft) => (
        <Grid item xs={3} key={nft.id}>
          <NFTCard {...{ ...nft }} />
        </Grid>
      ))}
    </Grid>
  )
}

export default DepositedNFTs
