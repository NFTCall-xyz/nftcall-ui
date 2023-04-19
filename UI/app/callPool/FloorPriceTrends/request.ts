import { getNumber } from 'app/utils/get'
import { parseParams } from 'app/utils/url/params'

import { weiToValue } from 'lib/math'

import type { FloorPriceTrends, GetFloorPriceTrendsProps } from './types'

export const getFloorPriceTrends = (props: GetFloorPriceTrendsProps): Promise<FloorPriceTrends[]> => {
  const { chainId, NFTAddress, startTimestamp, endTimestamp } = props

  const fn = (): Promise<any> =>
    fetch(
      parseParams('https://api.nftcall.xyz/api/v1/prices', {
        chain_id: chainId,
        address: NFTAddress,
        start: startTimestamp,
        end: endTimestamp,
      }),
      {
        headers: {
          accept: 'application/json, multipart/mixed',
          'content-type': 'application/json',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
        },
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
      }
    ).then((data) => data.json())

  return fn().then(({ data }) =>
    data.map((item: any) => {
      const timestamps = getNumber(item, ['time'])
      return {
        chainId,
        NFTAddress,
        floorPrice: weiToValue(item.price, 18),
        vol: weiToValue(item.vol, 4),
        createTime: timestamps.time,
      }
    })
  )
}
