import Grid from '@mui/material/Grid'
import { useWallet } from 'domains'
import { useCallback, useEffect, useMemo, useState } from 'react'
import NFTCard from './NFTCard'
import { getWalletNFT } from './getWalletNFT'
import { useCallPoolDetails, useNetwork } from 'domains/data'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import type { DepositProps } from 'lib/protocol/typechain/nftcall'
import { transaction } from 'domains/controllers/adapter/transaction'

const WalletNFTs = () => {
  const [NFTs, setNFTs] = useState([])
  const {
    contracts: { callPoolService, erc721Service },
  } = useNetwork()
  const { callPool } = useCallPoolDetails()
  const { chainId, networkAccount } = useWallet()

  const sendTransaction = useSendTransaction()
  const fn = useCallback(
    (props: DepositProps) => {
      return transaction({
        createTransaction: callPoolService.deposit(props),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
    },
    [callPoolService, sendTransaction]
  )
  const request = useCallback(() => {
    if (!networkAccount) return
    getWalletNFT({
      chainId,
      user: networkAccount,
      tokenAddresses: ['0x445b465bA8E68C6f2d50C29DB5B629E40F6e9978'],
    }).then((values) => {
      if (values[0]) {
        setNFTs(values[0].tokenIds)
      } else {
        setNFTs([])
      }
    })
  }, [chainId, networkAccount])

  const action = useMemo(() => {
    return {
      name: 'Deposit',
      onClick: (id: string) => {
        fn({
          callPool: callPool.address.CallPool,
          user: networkAccount,
          nft: '0x445b465bA8E68C6f2d50C29DB5B629E40F6e9978',
          tokenId: id,
          approveService: erc721Service as any,
          lowerStrikePriceGapIdx: 0,
          upperDurationIdx: 0,
          lowerLimitOfStrikePrice: '0',
        }).then(() => request())
      },
    }
  }, [callPool.address.CallPool, erc721Service, fn, networkAccount, request])

  const nfts = useMemo(() => {
    return NFTs.map((i) => {
      return {
        id: i,
        description: '#' + i,
        minStrikePrice: 0,
        maxExpriyTime: 0,
        action,
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

export default WalletNFTs
