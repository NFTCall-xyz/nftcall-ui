import { useWallet } from 'domains'
import { useCallback, useEffect, useMemo } from 'react'

import { getCurrentTimestamp } from 'app/constant'
import type { GetQueryProps } from 'app/hooks/request/useLoadMore'
import { useLoadMore } from 'app/hooks/request/useLoadMore'
import { getAddresses, getNumber, getWeiToValueBN, safeGet } from 'app/utils/get'

import { useCallPools, useNetwork } from 'domains/data'
import { NFTStatus } from 'domains/data/nft/types'

import type { DepositedNFT } from '../NFTCard'
import type { DepositedNFTs, DepositedNFTsProps } from './request'
import { getDepositedNFTs } from './request'

const pageSize = 30
export const useDepositedNFTs = () => {
  const { thegraphUrl } = useNetwork()
  const { account } = useWallet()
  const { callPools } = useCallPools()
  const nfts = useMemo(() => callPools.map((callPool) => callPool.address.NFT), [callPools])
  const getQuery = useCallback(
    (props: GetQueryProps) => {
      const query: DepositedNFTsProps = {
        ...props,
        thegraphUrl,
        user: account,
        nfts,
      }
      return query
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [nfts.join(','), account, thegraphUrl]
  )

  const getData = useCallback(
    (sourceData: DepositedNFTs) => {
      const now = getCurrentTimestamp()
      return sourceData.map((data) => {
        const { tokenId, strikePriceGapIdx, durationIdx, position, nftAddress } = data
        let { status } = data
        if (status === NFTStatus.Called && position && position.endTime < now) {
          status = NFTStatus.Listed
        }
        const callPool = callPools.find((callPool) => callPool.address.NFT.toLowerCase() === nftAddress)
        return {
          minStrikePrice: strikePriceGapIdx,
          maxExpriyTime: durationIdx,
          ...getWeiToValueBN(data, ['lowerLimitOfStrikePrice'], 18),
          ...getAddresses(data, ['nftAddress', 'callPoolAddress']),
          tokenId,
          status,
          position: position && {
            ...getWeiToValueBN(position, ['premiumToOwner', 'strikePrice'], 18),
            ...getNumber(position, ['endTime']),
          },
          deactivate: safeGet(() => callPool.stats.deactivate),
          paused: safeGet(() => callPool.stats.paused),
        } as DepositedNFT
      })
    },
    [callPools]
  )

  const isNoValidQuery = useCallback(({ user, thegraphUrl, nfts }: DepositedNFTsProps) => {
    return !user || !thegraphUrl || !nfts || !nfts.length
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
