import { getUserStatsBaseData } from './getUserStatsBaseData'

export type UserStatsProps = {
  userAddress: string
  subgraphName: string
}

export const userStatsRequest = ({ userAddress, subgraphName }: UserStatsProps) => {
  return fetch(`https://api.thegraph.com/subgraphs/name/${subgraphName}`, {
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
    .then(({ data: { userStats } }) => getUserStatsBaseData(userStats))
}

export type UserStatsSliceState = Awaited<ReturnType<typeof userStatsRequest>>
