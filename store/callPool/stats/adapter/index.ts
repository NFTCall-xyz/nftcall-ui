import { getStatsBaseData } from './getStatsBaseData'

export type StatsProps = {
  subgraphName: string
  callPools: string[]
}

const getGqlQuery = ({ callPools }: StatsProps) => {
  return `
  {
    callPoolStats(
      first: 1000
      where: {
        id_in: [
          ${callPools.map((callPool) => JSON.stringify(callPool.toLowerCase())).join(',')}
        ]
      }
    ) {
      id
      accumulativePremium
      totalNFTSales
      totalDepositedNFTs
      totalOptionContracts
      nfts(
        first: 5
        orderBy: updateTimestamp
        orderDirection: desc
        where: { status_not: Removed }
      ) {
        nftAddress
        tokenId
      }
    }
  }
  `
}

export const statsRequest = (props: StatsProps) => {
  const { subgraphName, callPools } = props
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
      query: getGqlQuery(props),
    }),
    method: 'POST',
    mode: 'cors',
    credentials: 'omit',
  })
    .then((data) => data.json())
    .then(({ data: { callPoolStats } }) => getStatsBaseData(callPools, callPoolStats))
}

export type StatsSliceState = Awaited<ReturnType<typeof statsRequest>>
