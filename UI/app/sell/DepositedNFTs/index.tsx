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

  const request = useCallback(() => {
    if (!networkAccount) return
    getDepositedNFTs({
      chainId,
      user: networkAccount,
      nft: '0x445b465bA8E68C6f2d50C29DB5B629E40F6e9978',
    }).then((data) => {
      setNFTs(data)
    })
  }, [chainId, networkAccount])

  const action = useMemo(() => {
    return [
      {
        name: 'Withdraw',
        onClick: (id: string) => {
          withdraw({
            callPool: callPool.address.CallPools,
            user: networkAccount,
            tokenId: id,
          }).then(() => request())
        },
      },
      {
        name: 'RelistNFT',
        onClick: (id: string) => {
          relistNFT({
            callPool: callPool.address.CallPools,
            user: networkAccount,
            tokenId: id,
          }).then(() => request())
        },
      },
      {
        name: 'TakeNFTOffMarket',
        onClick: (id: string) => {
          takeNFTOffMarket({
            callPool: callPool.address.CallPools,
            user: networkAccount,
            tokenId: id,
          }).then(() => request())
        },
      },
    ]
  }, [withdraw, callPool.address.CallPools, networkAccount, request, relistNFT, takeNFTOffMarket])

  const nfts = useMemo(() => {
    return NFTs.map(({ tokenId, strikePriceGapIdx, durationIdx, status }) => {
      let actions = []
      if (status === 'Deposited') {
        actions = [action[0], action[1]]
      } else {
        actions = [action[2]]
      }
      return {
        id: tokenId,
        name: `# ${tokenId}`,
        description: `strikePriceGapIdx: ${strikePriceGapIdx}\n durationIdx: ${durationIdx}`,
        minStrikePrice: strikePriceGapIdx,
        maxExpriyTime: durationIdx,
        action: actions,
      }
    })
  }, [NFTs, action])

  useEffect(() => {
    request()
  }, [request])

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
