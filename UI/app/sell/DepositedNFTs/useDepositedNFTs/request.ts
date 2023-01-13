import type { GetQueryProps } from 'app/hooks/request/useLoadMore'
import type { NFTStatus } from 'domains/data/nft/types'

export type DepositedNFTsProps = { subgraphName: string; user: string; nfts: string[] } & GetQueryProps
const getGqlQuery = ({ first, skip, nfts, user }: DepositedNFTsProps) => {
  return `
  {
    nfts(
      first: ${first}
      skip: ${skip}
      where: {
        nftAddress_in: [${nfts.map((nft) => JSON.stringify(nft.toLowerCase())).join(',')}]
        userAddress: "${user.toLowerCase()}"
        status_in: [Deposited, Listed, Called]
      }
    ) {
      tokenId
      strikePriceGapIdx
      durationIdx
      status
      nftAddress
      position {
        premiumToOwner
        strikePrice
        endTime
      }
    }
  }

  `
}

export const getDepositedNFTs = (
  props: DepositedNFTsProps
): Promise<
  Array<{
    tokenId: string
    strikePriceGapIdx: number
    durationIdx: number
    status: NFTStatus
    nftAddress: string
  }>
> => {
  const { subgraphName } = props

  const fn = (): Promise<any> =>
    fetch('https://api.thegraph.com/subgraphs/name/' + subgraphName, {
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
  return fn().then(({ data }) => data.nfts)
}

export type DepositedNFTs = Awaited<ReturnType<typeof getDepositedNFTs>>
