import { JsonRpcProvider } from '@ethersproject/providers'

import { getNumber } from 'app/utils/get'

import { weiToValue } from 'lib/math'
import { CallPool__factory } from 'lib/protocol/typechain/nftcall/typechain'

export type GetCallNFTProps = { jsonRpcUrl: string; tokenId: string; callPoolAddress: string }

export const getCallNFT = (props: GetCallNFTProps) => {
  const provider = new JsonRpcProvider({
    url: props.jsonRpcUrl,
  })
  const callPool = CallPool__factory.connect(props.callPoolAddress, provider)

  return callPool.getNFTStatus(props.tokenId).then((position) => {
    const timestamps = getNumber(position, ['endTime'])

    return {
      position: {
        strikePrice: weiToValue(position.strikePrice),
        endTime: timestamps.endTime,
      },
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
