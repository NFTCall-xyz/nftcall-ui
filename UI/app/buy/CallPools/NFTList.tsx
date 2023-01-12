import { safeGet } from 'app/utils/get'
import type { CallPool } from 'domains/data/callPools'
import NFTIcon from 'domains/data/nft/components/NFTIcon'
import { useMemo } from 'react'

interface NFTListProps {
  callPool: CallPool
}

const NFTList: FC<NFTListProps> = ({ callPool }) => {
  const nfts = useMemo(() => safeGet(() => callPool.stats.nfts) || [], [callPool])
  if (!nfts.length) return <p>no nfts</p>

  return (
    <>
      {nfts.map((nft) => (
        <NFTIcon nft={nft} key={nft.nftAddress + nft.tokenId} sx={{ width: 36, height: 36 }} />
      ))}
    </>
  )
}

export default NFTList
