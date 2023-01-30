import { getCurrentTimestamp } from 'app/constant'

import type { PositionBaseData } from 'domains/data/position/types'
import type { Position } from 'domains/data/position/types'

import { getPositions } from './getPositions'

type Props = {
  subgraphName: string
  skip: number
  first: number
} & Partial<{
  userAddress: string
  isActive: boolean
  callPoolAddress: string
  nftOwnerAddress: string
}>
export const request = ({
  subgraphName,
  skip,
  first,
  callPoolAddress,
  isActive,
  userAddress,
  nftOwnerAddress,
}: Props) => {
  if (!subgraphName) return Promise.reject({ message: 'network error' })
  let returnValue: Position[] = []
  const promises = []
  promises.push(
    fetch(subgraphName, {
      headers: {
        accept: '*/*',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'application/json',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
      },
      body: JSON.stringify({
        query: `{
  positions(
    first: ${first}
    skip: ${skip}
    where: {
      ${callPoolAddress ? `callPoolAddress: ${JSON.stringify(callPoolAddress)}` : ''}
      ${userAddress ? `userAddress: ${JSON.stringify(userAddress)}` : ''}
      ${nftOwnerAddress ? `nftOwnerAddress: ${JSON.stringify(nftOwnerAddress)}` : ''}
      ${isActive ? `endTime_gt: ${getCurrentTimestamp()}` : ''}
   }
    orderBy: createTimestamp
    orderDirection: desc
  ) {
    callPoolAddress
    userAddress
    nftAddress
    nftOwnerAddress
    tokenId
    exerciseTime
    endTime
    floorPrice
    strikePrice
    premiumToOwner
    premiumToReserve
    status
    updateTimestamp
    createTimestamp
  }
}`,
      }),
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
    })
      .then((data) => data.json())
      .then(({ data: { positions } }) => positions as PositionBaseData[])
      .then((data) => {
        returnValue = returnValue.concat(getPositions(data))
      })
  )
  return Promise.all(promises).then(() => returnValue)
}
