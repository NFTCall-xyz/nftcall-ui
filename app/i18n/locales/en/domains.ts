const locale = {
  callPools: {
    settingsDialog: {
      title: 'Options selling settings',
      submit: 'Update Settings',
      cancel: 'Cancel',
      listOnMarket: 'List on Market',
      listOnMartetTip: "If you don't want to your NFTs listed on the market for the options selling, you can toggle off the option at any time as long as your NFTs are not locked by the ongoing options contracts.",
    },
    depositDialog: {
      title: 'Deposit NFTs to sell call opitons',
      deposit: 'Deposit',
      cancel: 'Cancel',
    },
    depositBatchDialog: {
      title: 'Deposit NFTs to sell call opitons',
      setting: {
        title: 'Collection Settings',
        btn: 'Apply Settings',
      },
      deposit: 'Deposit',
      deposited: 'Deposited',
      cancel: 'Cancel',
    },
    settingBatchDialog: {
      title: 'Options selling settings',
      setting: {
        title: 'Collection Settings',
        btn: 'Apply Settings',
        update: 'Update Settings'
      },
      withdraw: 'Withdraw',
      withdrew: 'withdrew',
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
    minStrikePriceTip:
      'The minimum strike price increase that option buyers can choose when opening a call option on your NFT.',
    maxExpiryTime: 'Maximum expiration duration',
    maxExpiryTimeTip:
      'The longest expiration duration that option buyers can choose when opening a call option on your NFT.',
    lowerLimitOfStrikePrice: 'Minimum strike price',
    lowerLimitOfStrikePriceTip:
      'The minimum strike price you would like to receive, namely the lowest strike price that option buyers can choose when opening a call option on your NFT.',
  },
}

export default locale
