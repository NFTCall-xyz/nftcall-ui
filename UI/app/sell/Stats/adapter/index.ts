import { getWeiToValueBN } from 'app/utils/get'

type Props = {
  userAddress: string
  subgraphName: string
}
export type SliceState = Array<{
  accumulativeEarnings: BN
  totalNFTSales: BN
  totalDepositedNFTs: number
  totalOptionContracts: number
}>
export const request = ({ userAddress, subgraphName }: Props) => {
  if (!subgraphName) return Promise.reject({ message: 'network error' })
  let returnValue: UserStats[] = []
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
  userStats(
    where: { id: ${JSON.stringify(userAddress.toLocaleLowerCase())} }
  ) {
    accumulativeEarnings
  }
}`,
      }),
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
    })
      .then((data) => data.json())
      .then(({ data: { userStats } }) => userStats as SliceState)
      .then((data) => {
        returnValue = returnValue.concat(getUserStats(data))
      })
  )
  return Promise.all(promises).then(() => returnValue)
}

export type UserStats = {
  accumulativeEarnings: BN
}
export const getUserStats = (positions: SliceState) => {
  if (!positions) return []
  const returnValue = positions.map((t) => {
    const returnValue: UserStats = {
      ...t,
      ...getWeiToValueBN(t, ['accumulativeEarnings'], 18),
    }
    return returnValue
  })

  return returnValue
}
