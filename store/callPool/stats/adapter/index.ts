import type { StatsBaseData } from './getStatsBaseData'
import { getStatsBaseData } from './getStatsBaseData'

export type StatsProps = {
  subgraphName: string
  callPools: string[]
}

export const statsRequest = ({ subgraphName, callPools }: StatsProps) => {
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
  callPoolStats(
    first: 1000, where: {id_in: [${callPools.map((callPool) => JSON.stringify(callPool.toLowerCase())).join(',')}]}
  ) {
    id
    accumulativePremium
    totalNFTSales
    totalDepositedNFTs
    totalOptionContracts
  }
}`,
    }),
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
  })
    .then((data) => data.json())
    .then(({ data: { callPoolStats } }) => getStatsBaseData(callPools, callPoolStats))
}

export type StatsSliceState = Awaited<ReturnType<typeof statsRequest>>
