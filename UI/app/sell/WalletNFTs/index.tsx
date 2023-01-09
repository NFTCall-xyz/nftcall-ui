import Grid from '@mui/material/Grid'
import { useWallet } from 'domains'
import { useCallback, useEffect, useMemo } from 'react'
import type { NFTCardProps } from './NFTCard'
import NFTCard from './NFTCard'
import { useCallPoolDetails, useNetwork, useNFT } from 'domains/data'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import type { DepositProps } from 'lib/protocol/typechain/nftcall'
import { transaction } from 'domains/controllers/adapter/transaction'
import { getWalletDataKeyByNFTs } from 'store/nft/tokenId/wallet/adapter/getWalletData'

const WalletNFTs = () => {
  const {
    contracts: { callPoolService, erc721Service },
  } = useNetwork()
  const { callPool } = useCallPoolDetails()
  const { networkAccount } = useWallet()
  const {
    tokenId: { wallet, updateWallet, updateAssets },
  } = useNFT()

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
        }).then(() => updateWallet())
      },
    }
  }, [callPool.address.CallPool, erc721Service, fn, networkAccount, updateWallet])

  const { nfts, key } = useMemo(() => {
    const nfts: NFTCardProps[] = []
    wallet.forEach(({ tokenIds, nftAddress }) => {
      tokenIds.forEach((tokenId) => {
        nfts.push({
          tokenId,
          nftAddress,
          action,
        })
      })
    })
    const key = getWalletDataKeyByNFTs(nfts)
    return {
      key,
      nfts,
    }
  }, [wallet, action])

  useEffect(() => {
    updateAssets(wallet)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return (
    <Grid container spacing={2}>
      {nfts.map((nft) => (
        <Grid item xs={3} key={nft.nftAddress + nft.tokenId}>
          <NFTCard {...{ ...nft }} />
        </Grid>
      ))}
    </Grid>
  )
}

export default WalletNFTs
