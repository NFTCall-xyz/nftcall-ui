const locale = {
  vol: 'Volatility',
  floorPrice: 'Floor Price',
  depositedItems: 'Listed NFTs',
  tradingVolume: 'Trading Volume',
  history: {
    account: 'Account',
    NFT: 'NFT',
    expiryDate: 'Expiration Date',
    premium: 'Premium',
    status: 'Status',
    strikePrice: 'Strike Price',
  },
  tabs: {
    listedNFTs: 'Listed NFTs',
    history: 'History',
  },
  openPanel: {
    openCall: 'Buy Call Options',
    strikePrice: 'Strike Price',
    expiryDate: 'Expiration Date',
    increase: 'increase',
    later: 'later',
    totalPremium: 'Total Premium',
    yourBalance: 'Your Balance',
    open: 'Buy',
    minStrikePrice: 'Min. price gap:',
    minStrikePriceTip:
      'The minimum strike price increase that option buyers can choose when opening a call option on the NFT.',
    maxExpiryTime: 'Max. duration:',
    maxExpiryTimeTip:
      'The longest expiration duration that option buyers can choose when opening a call option on the NFT.',
    lowerLimitOfStrikePrice: 'Min. price:',
    lowerLimitOfStrikePriceTip:
      'The minimum strike price the seller would like to receive, namely the lowest strike price that option buyers can choose when opening a call option on the NFT.',
    unlimit: 'Unlimit',
  },
  errors: {
    ownerLimit: 'You are the #{{ tokenId }} NFT holder.',
    strikePriceLimit: 'The strike price for #{{ tokenId }} must be greater than the limit.',
    premiumLimit: 'The premium must be greater than {{ limit }} ETH.',
    general: 'Something wrong happened, please join our Discord for help.',
  },
}

export default locale
