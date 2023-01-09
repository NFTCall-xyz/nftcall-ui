import type { GetQueryProps } from 'app/hooks/request/useLoadMore'
import { useLoadMore } from 'app/hooks/request/useLoadMore'
import { useWallet } from 'domains'
import { useCallPools, useNetwork } from 'domains/data'
import { useCallback, useEffect, useMemo } from 'react'
import type { DepositedNFT } from '../NFTCard'
import type { DepositedNFTs, DepositedNFTsProps } from './request'
import { getDepositedNFTs } from './request'

const pageSize = 30
export const useDepositedNFTs = () => {
  const { subgraphName } = useNetwork()
  const { networkAccount } = useWallet()
  const { callPools } = useCallPools()
  const nfts = useMemo(() => callPools.map((callPool) => callPool.address.NFT), [callPools])
  const getQuery = useCallback(
    (props: GetQueryProps) => {
      const query: DepositedNFTsProps = {
        ...props,
        subgraphName,
        user: networkAccount,
        nfts,
      }
      return query
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nfts.join(','), networkAccount, subgraphName]
  )

  const getData = useCallback((sourceData: DepositedNFTs) => {
    return sourceData.map(({ tokenId, nftAddress, strikePriceGapIdx, durationIdx, status }) => {
      return {
        minStrikePrice: strikePriceGapIdx,
        maxExpriyTime: durationIdx,
        nftAddress,
        tokenId,
        status,
      } as DepositedNFT
    })
  }, [])

  const isNoValidQuery = useCallback(({ user, subgraphName, nfts }: DepositedNFTsProps) => {
    return !user || !subgraphName || !nfts || !nfts.length
  }, [])

  const returnValue = useLoadMore({
    pageSize,
    request: getDepositedNFTs,
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
