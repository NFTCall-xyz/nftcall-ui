import { getCurrentTimestamp } from 'app/constant'
import type { GetQueryProps } from 'app/hooks/request/useLoadMore'

import type { NFTStatus } from 'domains/data/nft/types'

export type ListedNFTsProps = { subgraphName: string; nft: string } & GetQueryProps

const getGqlQuery = ({ first, skip, nft }: ListedNFTsProps) => {
  const nowTimestamp = getCurrentTimestamp()
  return `
  fragment nftInfo on NFT {
    tokenId
    strikePriceGapIdx
    durationIdx
    lowerLimitOfStrikePrice: minimumStrikePrice
    status
    nftAddress
    userAddress
  }

  {
    calledNFTs: nfts(
      first: ${first}
      skip: ${skip}
      where: {
        status: Called
        positionEndTimestamp_lt: ${nowTimestamp}
        nftAddress: "${nft.toLowerCase()}"
      }
      orderBy: positionEndTimestamp
      orderDirection: asc
    ) {
      updateTimestamp: positionEndTimestamp
      ...nftInfo
    }
    otherNFTs: nfts(
      first: ${first}
      skip: ${skip}
      where: { status_in: [Listed], nftAddress: "${nft.toLowerCase()}" }
      orderBy: updateTimestamp
      orderDirection: asc
    ) {
      updateTimestamp
      ...nftInfo
    }
  }
  `
}

export const getListedNFTs = (
  props: ListedNFTsProps
): Promise<
  Array<{
    tokenId: string
    strikePriceGapIdx: number
    lowerLimitOfStrikePrice: BN
    durationIdx: number
    status: NFTStatus
    nftAddress: string
    userAddress: string
    updateTimestamp: number
  }>
> => {
  const { subgraphName } = props

  const fn = (): Promise<any> =>
    fetch('' + subgraphName, {
      headers: {
        accept: 'application/json, multipart/mixed',
        'accept-language': 'zh-CN,zh;q=0.9',
        'content-type': 'application/json',
        'sec-ch-ua': '"Google Chrome";v="111", "Not(A:Brand";v="8", "Chromium";v="111"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-site',
      },

      body: JSON.stringify({ query: getGqlQuery(props) }),
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
    }).then((data) => data.json())
  return fn().then(({ data }) => data.calledNFTs.concat(data.otherNFTs))
}

export type ListedNFTs = Awaited<ReturnType<typeof getListedNFTs>>
