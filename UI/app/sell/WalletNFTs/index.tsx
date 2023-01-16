import Grid from '@mui/material/Grid'
import { useEffect, useMemo } from 'react'
import type { WalletNFT, NFTCardProps } from './NFTCard'
import NFTCard from './NFTCard'
import { useCallPools, useNFT } from 'domains/data'
import { getWalletDataKeyByNFTs } from 'store/nft/tokenId/wallet/adapter/getWalletData'
import { safeGet } from 'app/utils/get'
import { log } from 'app/utils/dev'
import { Paragraph } from 'components/Typography'
import FlexRowAlign from 'components/flexbox/FlexRowAlign'
import { useTranslation } from 'next-i18next'

const WalletNFTs = () => {
  const { t } = useTranslation('app-sell')
  const {
    tokenId: { wallet, updateAssets },
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
