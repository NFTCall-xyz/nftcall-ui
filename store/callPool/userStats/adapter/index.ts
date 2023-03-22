import { getUserStatsBaseData } from './getUserStatsBaseData'

export type UserStatsProps = {
  userAddress: string
  thegraphUrl: string
}

const getGqlQuery = ({ userAddress }: UserStatsProps) => {
  return `
  {
    userStats(where: { id: "${userAddress.toLowerCase()}" }) {
      accumulativeEarnings
      sellerYield
      totalDuration
      userCallPoolStat {
        accruedEarnings
        callPoolAddress
      }
    }
  }
  `
}

export const userStatsRequest = (prop: UserStatsProps) => {
  const { thegraphUrl } = prop
  return fetch(thegraphUrl, {
    headers: {
      accept: '*/*',
      'accept-language': 'zh-CN,zh;q=0.9',
      'content-type': 'application/json',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
    },
    body: JSON.stringify({
      query: getGqlQuery(prop),
    }),
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
  })
    .then((data) => data.json())
    .then(({ data: { userStats } }) => getUserStatsBaseData(userStats))
}

export type UserStatsSliceState = Awaited<ReturnType<typeof userStatsRequest>>
