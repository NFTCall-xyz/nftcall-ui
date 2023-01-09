import Grid from '@mui/material/Grid'
import { useWallet } from 'domains'
import { useCallback, useEffect, useMemo } from 'react'
import type { WalletNFT, NFTCardProps } from './NFTCard'
import NFTCard from './NFTCard'
import { useCallPools, useNetwork, useNFT } from 'domains/data'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import type { DepositProps } from 'lib/protocol/typechain/nftcall'
import { transaction } from 'domains/controllers/adapter/transaction'
import { getWalletDataKeyByNFTs } from 'store/nft/tokenId/wallet/adapter/getWalletData'
import { safeGet } from 'app/utils/get'
import { log } from 'app/utils/dev'

const WalletNFTs = () => {
  const {
    contracts: { callPoolService, erc721Service },
  } = useNetwork()
  const { networkAccount } = useWallet()
  const {
    tokenId: { wallet, updateWallet, updateAssets },
  } = useNFT()
  const { callPools } = useCallPools()

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
      onClick: ({ callPoolAddress, nftAddress, tokenId }: WalletNFT) => {
        fn({
          callPool: callPoolAddress,
          user: networkAccount,
          nft: nftAddress,
          tokenId,
          approveService: erc721Service as any,
          lowerStrikePriceGapIdx: 0,
          upperDurationIdx: 0,
          lowerLimitOfStrikePrice: '0',
        }).then(() => updateWallet())
      },
    }
  }, [erc721Service, fn, networkAccount, updateWallet])

  const { nfts, key } = useMemo(() => {
    const nfts: NFTCardProps[] = []
    wallet.forEach(({ tokenIds, nftAddress }) => {
      const callPool = callPools.find((callPool) => callPool.address.NFT.toLowerCase() === nftAddress)
      tokenIds.forEach((tokenId) => {
        nfts.push({
          tokenId,
          nftAddress,
          action,
          callPoolAddress: safeGet(() => callPool.address.CallPool),
        })
      })
    })
    const key = getWalletDataKeyByNFTs(nfts)
    log('[WalletNFTs]', nfts)
    return {
      key,
      nfts,
    }
  }, [wallet, callPools, action])

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
