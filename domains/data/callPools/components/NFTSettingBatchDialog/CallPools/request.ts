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
    contracts: { callPoolService },
  } = useNetwork()
  const { account } = useWallet()
  const sendTransaction = useSendTransaction()

  const requestSetting = useCallback(
    (props: RequestProps) => {
      const {
        nfts,
        callPool: {
          address: { CallPool },
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
        createTransaction: callPoolService.changePreference({
          callPool: CallPool,
          user: account,
          tokenIds,
          lowerLimitOfStrikePrices,
          lowerStrikePriceGapIdxs: minStrikePrices,
          upperDurationIdxs: maxExpriyTimes,
        }),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
    },
    [callPoolService, account, sendTransaction]
  )

  const requestWithdraw = useCallback(
    (props: RequestProps) => {
      const {
        nfts,
        callPool: {
          address: { CallPool },
        },
      } = props

      const [tokenIds] = nfts.reduce(
        (returnValue, nft) => {
          const { tokenId } = nft
          returnValue[0].push(tokenId)
          return returnValue
        },
        [[]] as any[][]
      )

      return transaction({
        createTransaction: callPoolService.withdraw({
          callPool: CallPool,
          user: account,
          tokenIds,
        }),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
      })
    },
    [callPoolService, account, sendTransaction]
  )

  return {
    requestSetting,
    requestWithdraw,
  }
}
