const locale = {
  title: 'Sell NFT Call Options',
  subTitle:
    'List your NFTs on the market for options writing and earn the premiums. Notice that if options buyers choose to exercise, your NFTs will be sold at the strike price.',
  stats: {
    claimable: 'Claimable Earnings',
    claimableTip: 'Your income consists of two parts, denominated in ETH, one from the option premium and the other from the strike price paid by the options buyer when the option is exercised. All your income will be stored in the contract and you need to claim your earnings mannually.',
    accruedEarnings: 'Accrued Earnings',
    accruedEarningsTip: 'Your historical total earnings from the options selling.',
    claim: 'Claim',
    APY: 'Estimated APY',
    APYTip: 'Estimated APY is calculated based on your total yield and the total duration of options sold. APY = Total yield / Total duration * 365 * 100%',
  },
  callPools: {
    floorPrice: 'Floor Price',
    depositedItems: 'Deposited Items',
  },
  tabs: {
    walletNFTs: 'Wallet',
    depositedNFTs: 'Deposited',
    settingSelected: 'Update Settings',
    withdrawSelected: 'Withdraw Selected',
    depositSelected: 'Deposit Selected',
    clearSelected: 'Clear All',
    sold: 'NFTs Sold',
    positions: 'Options Sold',
  },
  history: {
    NFT: 'NFT',
    transactionHash: 'Tx Hash',
    createTimestamp: 'Date',
    soldPrice: 'Sold Price',
  },
  nftcard: {
    strikePrice: 'Strike Price',
    premiumEarned: 'Premium Earned',
    settings: 'Settings',
    withdraw: 'Withdraw',
    expiryDate: 'Expiration Date',
  },
  positions: {
    NFT: 'NFT',
    floorPrice: 'Floor Price',
    strikePrice: 'Strike Price',
    date: 'Date',
    expiryDate: 'Expiration Date',
    exercisableDate: 'Exercisable Date',
    exercisedDate: 'Exercised Date',
    premiumToOwner: 'Earnings',
    PNL: 'PNL',
    status: 'Status',
    action: 'Action',
    exercise: 'Exercise',
  },
  table: {
    walletTip: "You don't have available NFTs.",
    depositedTip: "You don't have deposited NFTs.",
    soldTip: "You don't have sold NFTs.",
  },
}

export default locale
