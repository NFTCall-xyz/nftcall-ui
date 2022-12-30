import type { ChainId } from 'lib/protocol/chain/types'

export type DepositedNFTsProps = { chainId: ChainId; user: string }
export const getDepositedNFTs = (
  props: DepositedNFTsProps
): Promise<
  Array<{
    underlyingNFT: string
    tokenIds: string[]
  }>
> => {
  const { user, chainId } = props
  if (!user || !chainId) return Promise.reject()

  const fn = (): Promise<any> =>
    fetch('https://api.thegraph.com/subgraphs/name/rockgold0911/nftcall', {
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
      referrer: 'https://thegraph.com/',
      referrerPolicy: 'strict-origin-when-cross-origin',
      body: `{"query":"{\\n  deposits(first: 5, where: {user: \\"${user}\\"}) {\\n  tokenId\\n  }\\n}"}`,
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
    }).then((data) => data.json())
  return fn().then(({ data }) => {
    return data.deposits
  })
}

export type DepositedNFTs = Awaited<ReturnType<typeof getDepositedNFTs>>
