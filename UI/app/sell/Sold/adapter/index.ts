import { getNumber, getWeiToValueBN, getAddresses } from 'app/utils/get'

type Props = {
  subgraphName: string
  skip: number
  first: number
  userAddress: string
}
export type SliceState = Array<{
  soldPrice: BN
  nftAddress: string
  tokenId: string
  createTimestamp: number
  transactionHash: string
}>
export const request = ({ subgraphName, skip, first, userAddress }: Props) => {
  if (!subgraphName) return Promise.reject({ message: 'network error' })
  let returnValue: NFTTransaction[] = []
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
  nfttransactions(
    first: ${first}
    skip: ${skip}
    where: { userAddress: ${JSON.stringify(userAddress)} }
    orderBy: createTimestamp
    orderDirection: desc
  ) {
    nftAddress
    tokenId
    soldPrice
    createTimestamp
    transactionHash
  }
}`,
      }),
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
    })
      .then((data) => data.json())
      .then(({ data: { nfttransactions } }) => nfttransactions as SliceState)
      .then((data) => {
        returnValue = returnValue.concat(getNFTTransactions(data))
      })
  )
  return Promise.all(promises).then(() => returnValue)
}

export type NFTTransaction = {
  soldPrice: BN
  nftAddress: string
  tokenId: string
  createTimestamp: number
  transactionHash: string
}
export const getNFTTransactions = (positions: SliceState) => {
  if (!positions) return []
  const returnValue = positions.map((t) => {
    const timestamps = getNumber(t, ['createTimestamp'])
    const returnValue: NFTTransaction = {
      ...t,
      ...timestamps,
      ...getAddresses(t, ['nftAddress']),
      ...getWeiToValueBN(t, ['soldPrice'], 18),
    }
    return returnValue
  })

  return returnValue
}
