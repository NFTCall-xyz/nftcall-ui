export enum PositionStatus {
  'Unexercised' = 'Unexercised',
  'Exercised' = 'Exercised',
  'Expired' = 'Expired',
  'NotExercisable' = 'NotExercisable',
  'Exercisable' = 'Exercisable',
}

export type PositionBaseData = {
  status: PositionStatus
  floorPrice: BN
  strikePrice: BN
  premiumToOwner: BN
  premiumToReserve: BN
  nftOwnerAddress: string
  nftAddress: string
  userAddress: string
  callPoolAddress: string
  tokenId: string
  endTime: number
  exerciseTime: number
  updateTimestamp: number
  createTimestamp: number
}

export type Position = {
  status: PositionStatus
  strikePrice: BN
  premiumToOwner: BN
  premiumToReserve: BN
  floorPrice?: BN
  PnL?: BN
  PnLInPercent?: BN
  premium: BN
  nftOwnerAddress: string
  nftAddress: string
  userAddress: string
  callPoolAddress: string
  tokenId: string
  endTime: number
  exerciseTime: number
  updateTimestamp: number
  createTimestamp: number
}
