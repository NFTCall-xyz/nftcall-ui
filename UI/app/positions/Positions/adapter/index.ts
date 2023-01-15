import { getCurrentTimestamp } from 'app/constant'
import { getNumber, getWeiToValueBN, getAddresses } from 'app/utils/get'

type Props = {
  subgraphName: string
  skip: number
  first: number
  userAddress: string
  isActive: boolean
}
export type SliceState = Array<{
  status: string
  strikePrice: BN
  premiumToOwner: BN
  premiumToReserve: BN
  nftAddress: string
  callPoolAddress: string
  tokenId: string
  endTime: number
  exerciseTime: number
}>
export const request = ({ subgraphName, skip, first, userAddress, isActive }: Props) => {
  if (!subgraphName) return Promise.reject({ message: 'network error' })
  let returnValue: Position[] = []
  const promises = []
  promises.push(
    fetch(`https://api.thegraph.com/subgraphs/name/${subgraphName}`, {
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
    where: { userAddress: ${JSON.stringify(userAddress)} ${isActive ? `,endTime_gt: ${getCurrentTimestamp()}` : ''}}
    orderBy: createTimestamp
    orderDirection: desc

  ) {
    callPoolAddress
    nftAddress
    tokenId
    exerciseTime
    endTime
    strikePrice
    premiumToOwner
    premiumToReserve
    status
  }
}`,
      }),
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
    })
      .then((data) => data.json())
      .then(({ data: { positions } }) => positions as SliceState)
      .then((data) => {
        returnValue = returnValue.concat(getPositions(data))
      })
  )
  return Promise.all(promises).then(() => returnValue)
}

export type Position = {
  status: string
  strikePrice: BN
  premiumToOwner: BN
  premiumToReserve: BN
  nftAddress: string
  callPoolAddress: string
  tokenId: string
  endTime: number
  exerciseTime: number
}
export const getPositions = (positions: SliceState) => {
  if (!positions) return []
  const returnValue = positions.map((t) => {
    const timestamps = getNumber(t, ['endTime', 'exerciseTime'])
    const returnValue: Position = {
      ...t,
      ...timestamps,
      ...getAddresses(t, ['nftAddress', 'callPoolAddress']),
      ...getWeiToValueBN(t, ['strikePrice', 'premiumToOwner', 'premiumToReserve'], 18),
    }
    if (returnValue.status === 'Unexercised') {
      const now = Date.now()
      if (returnValue.endTime < now) {
        returnValue.status = 'Expired'
      } else if (returnValue.exerciseTime > now) {
        returnValue.status = 'NotExercisable'
      } else {
        returnValue.status = 'Exercisable'
      }
    }
    return returnValue
  })

  return returnValue
}
