import type { GetQueryProps } from 'app/hooks/request/useLoadMore'
import { useLoadMore } from 'app/hooks/request/useLoadMore'
import { safeGet } from 'app/utils/get'
import { useCallPoolDetails, useNetwork } from 'domains/data'
import { useCallback, useEffect } from 'react'
import type { ListedNFT } from '../NFTCard'
import type { ListedNFTs, ListedNFTsProps } from './request'
import { getListedNFTs } from './request'

const pageSize = 30
export const useListedNFTs = () => {
  const { subgraphName } = useNetwork()
  const { callPool } = useCallPoolDetails()
  const getQuery = useCallback(
    (props: GetQueryProps) => {
      const query: ListedNFTsProps = {
        ...props,
        subgraphName,
        nft: callPool.address.NFT,
      }
      return query
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [safeGet(() => callPool.address.NFT), subgraphName]
  )

  const getData = useCallback((sourceData: ListedNFTs) => {
    return sourceData.map(({ tokenId, nftAddress, strikePriceGapIdx, durationIdx, status }) => {
      return {
        minStrikePrice: strikePriceGapIdx,
        maxExpriyTime: durationIdx,
        nftAddress,
        tokenId,
        status,
      } as ListedNFT
    })
  }, [])

  const isNoValidQuery = useCallback(({ subgraphName, nft }: ListedNFTsProps) => {
    return !subgraphName || !nft
  }, [])

  const returnValue = useLoadMore({
    pageSize,
    request: getListedNFTs,
    getQuery,
    getData,
    isNoValidQuery,
  })

  useEffect(() => {
    returnValue.restart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getQuery])

  return returnValue
}
