import { useTranslation } from 'next-i18next'
import { useMemo } from 'react'

import { safeGet } from 'app/utils/get'

import { Paragraph } from 'components/Typography'

import type { CallPool } from 'domains/data/callPools'
import NFTIcon from 'domains/data/nft/components/NFTIcon'

interface NFTListProps {
  callPool: CallPool
}

const NFTList: FC<NFTListProps> = ({ callPool }) => {
  const nfts = useMemo(() => safeGet(() => callPool.stats.nfts) || [], [callPool])
  const { t } = useTranslation('app-buy')

  if (!nfts.length)
    return (
      <Paragraph color="text.disabled" lineHeight="36px">
        {t('callPools.noNFT')}
      </Paragraph>
    )

  return (
    <>
      {nfts.map((nft) => (
        <NFTIcon nft={nft} key={nft.nftAddress + nft.tokenId} sx={{ width: 36, height: 36 }} />
      ))}
    </>
  )
}

export default NFTList
