import { useTranslation } from 'next-i18next'
import { useEffect, useMemo } from 'react'

import Grid from '@mui/material/Grid'

import { useIds } from 'app/hooks/useIds'
import { log } from 'app/utils/dev'
import { safeGet } from 'app/utils/get'

import { Paragraph } from 'components/Typography'
import FlexRowAlign from 'components/flexbox/FlexRowAlign'

import { useCallPools, useNFT } from 'domains/data'

import { getWalletDataKeyByNFTs } from 'store/nft/tokenId/wallet/adapter/getWalletData'

import type { NFTCardProps, WalletNFT } from './NFTCard'
import NFTCard from './NFTCard'

const WalletNFTs = () => {
  const ids = useIds()
  const { t } = useTranslation('app-sell')
  const {
    tokenId: { wallet, updateAssets, updateWallet },
  } = useNFT()
  const {
    callPools,
    dialogs: {
      nftDeposit: { open },
    },
  } = useCallPools()

  const action = useMemo(() => {
    return {
      name: 'Deposit',
      onClick: (nft: WalletNFT) => {
        open(nft)
      },
    }
  }, [open])

  const { nfts, key } = useMemo(() => {
    const nfts: NFTCardProps[] = []
    wallet.forEach(({ tokenIds, nftAddress }) => {
      const callPool = callPools.find((callPool) => callPool.address.NFT.toLowerCase() === nftAddress)
      tokenIds.forEach((tokenId) => {
        nfts.push({
          tokenId,
          nftAddress,
          action,
          ids,
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
  }, [wallet, callPools, action, ids])

  useEffect(() => {
    updateWallet().catch(() => {})
    const stop = updateAssets(wallet)
    return () => stop()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return (
    <Grid container spacing={2}>
      {nfts.length ? (
        nfts.map((nft) => (
          <Grid item xs={6} sm={3} md={2.4} key={nft.nftAddress + nft.tokenId}>
            <NFTCard {...{ ...nft }} />
          </Grid>
        ))
      ) : (
        <FlexRowAlign width={1} height={100}>
          <Paragraph color="text.secondary">{t('table.walletTip')}</Paragraph>
        </FlexRowAlign>
      )}
    </Grid>
  )
}

export default WalletNFTs
