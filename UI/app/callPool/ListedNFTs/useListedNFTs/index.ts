import { useCallback, useEffect } from 'react'

import type { GetQueryProps } from 'app/hooks/request/useLoadMore'
import { useLoadMore } from 'app/hooks/request/useLoadMore'
import { getNumber, getWeiToValueBN, safeGet } from 'app/utils/get'

import { useCallPoolDetails, useNetwork } from 'domains/data'

import type { ListedNFT } from '../NFTCard'
import type { ListedNFTs, ListedNFTsProps } from './request'
import { getListedNFTs } from './request'

const pageSize = 30
export const useListedNFTs = () => {
  const { thegraphUrl } = useNetwork()
  const { callPool } = useCallPoolDetails()
  const getQuery = useCallback(
    (props: GetQueryProps) => {
      const query: ListedNFTsProps = {
        ...props,
        thegraphUrl,
        nft: callPool.address.NFT,
      }
      return query
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [safeGet(() => callPool.address.NFT), thegraphUrl]
  )

  const getData = useCallback((sourceData: ListedNFTs) => {
    return sourceData.map((nft) => {
      const { tokenId, nftAddress, strikePriceGapIdx, durationIdx, status, userAddress } = nft
      const timestamps = getNumber(nft, ['updateTimestamp'])
      return {
        minStrikePrice: strikePriceGapIdx,
        maxExpriyTime: durationIdx,
        nftAddress,
        userAddress,
        tokenId,
        status,
        ...timestamps,
        ...getWeiToValueBN(nft, ['lowerLimitOfStrikePrice'], 18),
      } as ListedNFT
    })
  }, [])

  const isNoValidQuery = useCallback(({ thegraphUrl, nft }: ListedNFTsProps) => {
    return !thegraphUrl || !nft
  }, [])

  const isNoMoreData = useCallback((pageSize: number, data: ListedNFTs) => !data.length, [])

  const returnValue = useLoadMore({
    pageSize,
    request: getListedNFTs,
    getQuery,
    getData,
    isNoMoreData,
    isNoValidQuery,
  })

  useEffect(() => {
    returnValue.restart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getQuery])

  return returnValue
}

export type UseListedNFTs = ReturnType<typeof useListedNFTs>
