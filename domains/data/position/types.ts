export enum PositionStatus {
  'Unexercised' = 'Unexercised',
  'Exercised' = 'Exercised',
  'Expired' = 'Expired',
  'NotExercisable' = 'NotExercisable',
  'Exercisable' = 'Exercisable',
}

export type PositionBaseData = {
  status: PositionStatus
  strikePrice: BN
  premiumToOwner: BN
  premiumToReserve: BN
  nftAddress: string
  userAddress: string
  callPoolAddress: string
  tokenId: string
  endTime: number
  exerciseTime: number
}

export type Position = {
  status: PositionStatus
  strikePrice: BN
  premiumToOwner: BN
  premiumToReserve: BN
  nftAddress: string
  userAddress: string
  callPoolAddress: string
  tokenId: string
  endTime: number
  exerciseTime: number
}