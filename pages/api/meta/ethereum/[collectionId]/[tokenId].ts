import type { NextApiRequest, NextApiResponse } from 'next'

// fetch('https://api.thegraph.com/subgraphs/name/gordon199404/nftcall-stage', {
//   headers: {
//     accept: 'application/json, multipart/mixed',
//     'accept-language': 'zh-CN,zh;q=0.9',
//     'content-type': 'application/json',
//   },
//   body: '{"query":"{\\n  nfts(first: 1, where: {nftAddress:\\"0x00e08ef200f274604f0201b7f780a43df9cdebbf\\",tokenId:\\"4\\"}) {\\n    \\n      tokenId\\n      strikePriceGapIdx\\n      durationIdx\\n      lowerLimitOfStrikePrice: minimumStrikePrice\\n      status\\n      nftAddress\\n      callPoolAddress\\n      position {\\n        premiumToOwner\\n        strikePrice\\n        endTime\\n      }\\n    \\n  }\\n}"}',
//   method: 'POST',
// })

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { tokenId, collectionId } = req.query
  if (typeof tokenId !== 'string' || typeof collectionId !== 'string') return res.status(404).end()

  return res.json({
    name: collectionId,
    description: 'Bored Ape Yacht Club 70.12 ETH strike call expiring on 21/03/23',
    external_url: '', //可以加个期权的详情页，先统一用 callPool的url吧
    image: `https://stage.nftcall.xyz/api/images/nfts/ethereum/${collectionId}/${tokenId}.svg`, //每个NFT池子封面不一样
    attributes: [
      {
        trait_type: 'Collection Name',
        value: 'Bored Ape Yacht Club',
      },
      {
        trait_type: 'Collection Address',
        value: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
      },
      {
        trait_type: 'Token ID',
        value: '1232',
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
        display_type: 'number',
        value: 12.1,
      },
      {
        display_type: 'date',
        trait_type: 'Expiration Date',
        value: 1546360800,
      },
    ],
  })
}
