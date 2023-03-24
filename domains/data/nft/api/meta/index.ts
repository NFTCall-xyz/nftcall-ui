import { formatInTimeZone } from 'date-fns-tz'
import type { NextApiRequest, NextApiResponse } from 'next'

import goerli from 'lib/protocol/generate/goerli.json'
import mainnet from 'lib/protocol/generate/mainnet.json'

import type { BaseCollection } from '../../application/collections/adapter/getCollection'
import { getCollections } from '../../application/collections/constant/collections'
import { getCallNFT } from './request'

const collections = getCollections()
const baseURL = 'https://nftcall.xyz'

const resloveCollectionId = (network: string, collectionId: string) => {
  const isMainnet = network === 'ethereum' || network === 'mainnet'
  const isGoerli = network === 'goerli'
  if (!isMainnet && !isGoerli) return {} as undefined

  const [collectionType, collectionSymbol] = collectionId.split('_')
  const [symbol, collection] = Object.entries(collections).find(([, i]) => i.symbol === collectionSymbol) || []

  let callPool = undefined as typeof mainnet.markets['Doodles']
  let jsonRpcUrl = ''

  if (isMainnet) {
    callPool = mainnet.markets[symbol as 'Doodles']
    jsonRpcUrl = 'https://eth.llamarpc.com'
  } else if (isGoerli) {
    callPool = goerli.markets[symbol as 'Doodles']
    jsonRpcUrl = 'https://rpc.ankr.com/eth_goerli'
  }

  return {
    symbol,
    callPool,
    jsonRpcUrl,
    collectionType,
    collection,
  }
}

type GetCallTokenJsonProps = GetDefalutCallTokenJsonProps & {
  callNFT: {
    position: {
      strikePrice: BN
      endTime: number
    }
  }
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
  const { tokenId, collectionId, network } = req.query
  if (typeof tokenId !== 'string' || typeof collectionId !== 'string') return res.status(404).end()
  const { symbol, callPool, collection, collectionType, jsonRpcUrl } = resloveCollectionId(network as any, collectionId)
  if (!symbol || !callPool || !collection) return res.status(404).end()
  const isCallToken = collectionType === 'call'
  if (!isCallToken) return res.status(404).end()

  if (isCallToken) {
    return getCallNFT({ tokenId, callPoolAddress: callPool.CallPool, jsonRpcUrl })
      .then((callNFT) => {
        if (!callNFT || !callNFT.position || !callNFT.position.endTime) {
          return res.json(getDefalutCallTokenJson({ symbol, collection, callPool, tokenId }))
        } else {
          res.json(getCallTokenJson({ symbol, collection, callPool, tokenId, callNFT }))
        }
      })
      .catch((e) => {
        res.status(400).json(e)
      })
  }
}
