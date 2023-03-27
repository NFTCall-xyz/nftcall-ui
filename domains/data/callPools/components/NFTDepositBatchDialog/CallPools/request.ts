import { useWallet } from 'domains'
import { useCallback } from 'react'

import { safeGet } from 'app/utils/get'

import { transaction } from 'domains/controllers/adapter/transaction'
import { useNetwork } from 'domains/data'
import type { CallPool } from 'domains/data/callPools'
import type { NFT } from 'domains/data/nft/types'

import { valueToWei } from 'lib/math'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'

type RequestProps = {
  callPool: CallPool
  nfts: NFT[]
}
export const useRequest = () => {
  const {
    contracts: { callPoolService, erc721Service },
  } = useNetwork()
  const { account } = useWallet()
  const sendTransaction = useSendTransaction()

  const request = useCallback(
    (props: RequestProps) => {
      const {
        nfts,
        callPool: {
          address: { CallPool, NFT },
        },
      } = props

      const [tokenIds, lowerLimitOfStrikePrices, minStrikePrices, maxExpriyTimes] = nfts.reduce(
        (returnValue, nft) => {
          const { tokenId, lowerLimitOfStrikePrice, minStrikePrice, maxExpriyTime } = nft
          returnValue[0].push(tokenId)
          returnValue[1].push(safeGet(() => valueToWei(lowerLimitOfStrikePrice).toString()) || '0')
          returnValue[2].push(minStrikePrice)
          returnValue[3].push(maxExpriyTime)
          return returnValue
        },
        [[], [], [], []] as any[][]
      )

      return transaction({
        createTransaction: callPoolService.deposit({
          callPool: CallPool,
          user: account,
          nft: NFT,
          tokenIds,
          approveService: erc721Service as any,
          lowerLimitOfStrikePrices,
          lowerStrikePriceGapIdxs: minStrikePrices,
          upperDurationIdxs: maxExpriyTimes,
        }),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
    },
    [callPoolService, erc721Service, account, sendTransaction]
  )

  return {
    request,
  }
}
