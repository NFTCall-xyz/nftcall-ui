import { getWeiToValueBN } from 'app/utils/get'

type Props = {
  nftAddress: string
  subgraphName: string
}
export type SliceState = Array<{
  accumulativePremium: BN
  totalNFTSales: BN
  totalDepositedNFTs: number
  totalOptionContracts: number
}>
export const request = ({ nftAddress, subgraphName }: Props) => {
  if (!subgraphName) return Promise.reject({ message: 'network error' })
  let returnValue: CallPoolStats[] = []
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
  callPoolStats(
    where: { id: ${JSON.stringify(nftAddress.toLocaleLowerCase())} }
  ) {
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
      .then(({ data: { callPoolStats } }) => callPoolStats as SliceState)
      .then((data) => {
        returnValue = returnValue.concat(getCallPoolStats(data))
      })
  )
  return Promise.all(promises).then(() => returnValue)
}

export type CallPoolStats = {
  accumulativePremium: BN
  totalNFTSales: BN
  totalDepositedNFTs: number
  totalOptionContracts: number
}
export const getCallPoolStats = (positions: SliceState) => {
  if (!positions) return []
  const returnValue = positions.map((t) => {
    const returnValue: CallPoolStats = {
      ...t,
      ...getWeiToValueBN(t, ['accumulativePremium', 'totalNFTSales'], 18),
    }
    return returnValue
  })

  return returnValue
}
