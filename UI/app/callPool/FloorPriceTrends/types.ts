import type { ChartProps } from 'react-chartjs-2'

export class UseTableProps {}
export type FloorPriceTrendsProps = any
export type GetFloorPriceTrendsProps = {
  chainId: number
  NFTAddress: string
  startTimestamp: number
  endTimestamp: number
}
export type FloorPriceTrends = {
  chainId: number
  NFTAddress: string
  floorPrice: BN
  vol: BN
  createTime: number
}
export type FloorPriceTrendsChartProps = Omit<ChartProps<'line', any, any>, 'type'>
