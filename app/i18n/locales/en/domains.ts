const locale = {
  callPools: {
    settingsDialog: {
      title: 'Options selling config',
      submit: 'Submit',
      cancel: 'Cancel',
      listOnMarket: 'List on Market',
    },
    depositDialog: {
      title: 'Deposit NFTs to sell call opitons',
      deposit: 'Deposit',
      cancel: 'Cancel',
    },
  },
  position: {
    status: {
      Exercisable: 'Exercisable',
      Exercised: 'Exercised',
      Expired: 'Expired',
      NotExercisable: 'Not Exercisable',
    },
  },
  nft: {
    minStrikePrice: 'Minimum strike price increase',
    minStrikePriceTip: 'The minimum strike price increase that option buyers can choose when opening a call option on your NFT.',
    maxExpiryTime: 'Maximum expiration duration',
    maxExpiryTimeTip:
      'The longest expiration duration that option buyers can choose when opening a call option on your NFT.',
    lowerLimitOfStrikePrice: 'Minimum strike price',
    lowerLimitOfStrikePriceTip:
      'The minimum strike price you would like to receive, namely the lowest strike price that option buyers can choose when opening a call option on your NFT.',
  },
}

export default locale
