import { getNumber } from 'app/utils/get'

import { weiToValue } from 'lib/math'

export type GetCallNFTProps = { thegraphUrl: string; tokenId: string; nft: string }

const getGqlQuery = ({ tokenId, nft }: GetCallNFTProps) => {
  return `
  fragment nftInfo on NFT {
    tokenId
    strikePriceGapIdx
    durationIdx
    lowerLimitOfStrikePrice: minimumStrikePrice
    nftAddress
    userAddress
  }

  {
    nfts(
      first: 1
      where: {
        nftAddress: "${nft.toLowerCase()}"
        tokenId: "${tokenId}"
      }
    ) {
      ...nftInfo
      position {
        premiumToOwner
        strikePrice
        endTime
      }
    }
  }
  `
}

export const getCallNFT = (props: GetCallNFTProps): Promise<CallNFT> => {
  const { thegraphUrl } = props
  const fn = (): Promise<any> =>
    fetch(thegraphUrl, {
      headers: {
        accept: 'application/json, multipart/mixed',
        'content-type': 'application/json',
      },

      body: JSON.stringify({ query: getGqlQuery(props) }),
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
    }).then((data) => data.json())
  return fn().then(({ data }) => {
    if (data.nfts[0] && data.nfts[0].position) {
      const { position } = data.nfts[0]

      const timestamps = getNumber(position, ['endTime'])

      position.strikePrice = weiToValue(position.strikePrice)
      position.premiumToOwner = weiToValue(position.premiumToOwner)
      position.endTime = timestamps.endTime

      data.nfts[0].position = position
      return data.nfts[0]
    }
  })
}

export type CallNFT = {
  tokenId: string
  strikePriceGapIdx: number
  lowerLimitOfStrikePrice: BN
  durationIdx: number
  nftAddress: string
  userAddress: string
  position: {
    strikePrice: BN
    premiumToOwner: BN
    endTime: number
  }
}

export type GetNFTTokenProps = { tokenId: string; tokenMetaUrl: string }
export const getNFTToken = (props: GetNFTTokenProps) => {
  const { tokenMetaUrl, tokenId } = props
  const fn = (): Promise<any> =>
    fetch(tokenMetaUrl.replace(':id', tokenId), {
      headers: {
        accept: 'application/json, multipart/mixed',
        'content-type': 'application/json',
      },
      method: 'GET',
      mode: 'cors',
      credentials: 'omit',
    }).then((data) => data.json())

  return fn()
}
