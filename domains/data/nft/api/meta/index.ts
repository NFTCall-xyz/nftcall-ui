import { formatInTimeZone } from 'date-fns-tz'
import type { NextApiRequest, NextApiResponse } from 'next'

import goerli from 'lib/protocol/generate/goerli.json'

import type { BaseCollection } from '../../application/collections/adapter/getCollection'
import { getCollections } from '../../application/collections/constant/collections'
import type { CallNFT } from './request'
import { getCallNFT, getNFTToken } from './request'

const collections = getCollections()
const baseURL = 'https://stage.nftcall.xyz'
const thegraphUrl = 'https://api.thegraph.com/subgraphs/name/gordon199404/nftcall-stage'

const resloveCollectionId = (collectionId: string) => {
  const [collectionType, collectionSymbol] = collectionId.split('_')
  const [symbol, collection] = Object.entries(collections).find(([, i]) => i.symbol === collectionSymbol) || []

  const callPool = goerli.markets[symbol as 'CloneX']

  return {
    symbol,
    callPool,
    collectionType,
    collection,
  }
}

type GetCallTokenJsonProps = GetDefalutCallTokenJsonProps & {
  callNFT: CallNFT
}
const getCallTokenJson = ({
  symbol,
  collection: { name: collectionName, mainNetworkAddress, callTokenImageUrl },
  callPool,
  tokenId,
  callNFT: { position },
}: GetCallTokenJsonProps) => {
  const strikePrice = position.strikePrice.toFixed(2)
  const expiringDate = formatInTimeZone(position.endTime, '', 'dd/MM/yy')
  const expiringTime = `${formatInTimeZone(position.endTime, '', 'dd/MM/yyyy HH:mm')} (UTC)`
  return {
    name: `${symbol} ${strikePrice} Call ${expiringDate}`,
    description: `${collectionName} #${tokenId} ${strikePrice} ETH strike call expiring on ${expiringTime}`,
    external_url: baseURL + '/app/callPool/' + callPool.CallPool,
    image: callTokenImageUrl.replace(':id', tokenId),
    attributes: [
      {
        trait_type: 'Underlying NFT',
        value: collectionName,
      },
      {
        trait_type: 'NFT Address',
        value: mainNetworkAddress,
      },
      {
        trait_type: 'Token ID',
        value: tokenId,
      },
      {
        trait_type: 'Currency',
        value: 'ETH',
      },
      {
        trait_type: 'Option Type',
        value: 'Call',
      },
      {
        trait_type: 'Strike Price',
        value: strikePrice,
      },
      {
        trait_type: 'Expiration Date',
        value: expiringTime,
      },
    ],
  }
}
type GetDefalutCallTokenJsonProps = {
  collection: BaseCollection
  callPool: {
    NFT: string
    CallPool: string
  }
  tokenId: string
  symbol: string
}
const getDefalutCallTokenJson = ({
  symbol,
  collection: { name: collectionName, mainNetworkAddress, callTokenImageUrl },
  callPool,
  tokenId,
}: GetDefalutCallTokenJsonProps) => {
  return {
    name: `${symbol} Call`,
    description: `${collectionName} #${tokenId} Call (Contract Terms Unspecified)`,
    external_url: baseURL + '/app/callPool/' + callPool.CallPool,
    image: callTokenImageUrl.replace(':id', tokenId),
    attributes: [
      {
        trait_type: 'Underlying NFT',
        value: collectionName,
      },
      {
        trait_type: 'NFT Address',
        value: mainNetworkAddress,
      },
      {
        trait_type: 'Token ID',
        value: tokenId,
      },
      {
        trait_type: 'Currency',
        value: 'ETH',
      },
      {
        trait_type: 'Option Type',
        value: 'Call',
      },
      {
        trait_type: 'Strike Price',
        value: 'Unspecified',
      },
      {
        trait_type: 'Expiration Date',
        value: 'Unspecified',
      },
    ],
  }
}

export function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tokenId, collectionId } = req.query
  if (typeof tokenId !== 'string' || typeof collectionId !== 'string') return res.status(404).end()
  const { symbol, callPool, collection, collectionType } = resloveCollectionId(collectionId)
  if (!symbol || !callPool || !collection) return res.status(404).end()
  const isCallToken = collectionType === 'call'
  const isNToken = collectionType === 'n'
  if (!isCallToken && !isNToken) return res.status(404).end()

  if (isCallToken) {
    return getCallNFT({ thegraphUrl, tokenId, nft: callPool.NFT })
      .then((callNFT) => {
        if (!callNFT || !callNFT.position) {
          return res.json(getDefalutCallTokenJson({ symbol, collection, callPool, tokenId }))
        } else {
          res.json(getCallTokenJson({ symbol, collection, callPool, tokenId, callNFT }))
        }
      })
      .catch((e) => {
        res.status(400).json(e)
      })
  } else if (isNToken) {
    const { tokenMetaUrl } = collection
    return getNFTToken({ tokenId, tokenMetaUrl })
      .then((data) => {
        res.json(data)
      })
      .catch((e) => {
        console.log(tokenMetaUrl.replace(':id', tokenId))
        res.status(400).json(e)
      })
  }
}
