import path from 'path'

import { writeFile } from 'app/utils/fs'
import { requireFromPath } from 'app/utils/require'

const ROOT_PATH = process.cwd()

const SOURCE_BASE_PATH = path.resolve(ROOT_PATH, 'lib/protocol/src')
const DEPLOYED_CONTRACTS_PATH = path.resolve(SOURCE_BASE_PATH, 'deployed-contracts-base.json')
const DEPLOYED_MARKET_CONTRACTS_PATH = path.resolve(SOURCE_BASE_PATH, 'deployed-contracts-pool.json')

const TARGET_BASE_PATH = path.resolve(ROOT_PATH, 'lib/protocol/generate')
const SUBGRAPH_TARGET_BASE_PATH = path.resolve(ROOT_PATH, 'lib/protocol/generate/dist')

export const run = async () => {
  const a = requireFromPath(DEPLOYED_CONTRACTS_PATH)
  const b = requireFromPath(DEPLOYED_MARKET_CONTRACTS_PATH)

  const networks: any = {}

  Object.keys(a).forEach((key) => {
    const v = a[key]
    Object.keys(v).forEach((network) => {
      if (!networks[network]) networks[network] = {}
      networks[network][key] = v[network].address.toLocaleLowerCase()
    })
  })

  const markets: any = {}
  Object.keys(b).forEach((key) => {
    const v = b[key]
    Object.keys(v).forEach((network) => {
      if (!networks[network]) networks[network] = {}
      const v2 = v[network]
      Object.keys(v2).forEach((marketId) => {
        if (!markets[network]) markets[network] = {}
        if (!markets[network][marketId]) markets[network][marketId] = {}

        try {
          markets[network][marketId][key] = typeof v2[marketId] === 'string' ? v2[marketId] : v2[marketId].address
        } catch (error) {
          console.log(`${network} ${marketId} ${key}`)
        }
      })
    })
  })

  Object.keys(networks).forEach((networkName) => {
    const marketConfig = markets[networkName]
    const config = {
      ...networks[networkName],
      markets: marketConfig,
    }
    writeFile(path.resolve(TARGET_BASE_PATH, `${networkName}.json`), config)

    if (networkName != 'goerli') return

    let subgraph = `
specVersion: 0.0.5
schema:
  file: ./schema.graphql
dataSources:
    `
    let subgraphStage = `
specVersion: 0.0.5
schema:
  file: ./schema.graphql
dataSources:
    `
    const getSubgraohDataSource = (networkName: string, nftName: string, address: string) => {
      return `
  - kind: ethereum
    name: ${nftName}CallPool
    network: ${networkName}
    source:
      address: "${address}"
      abi: CallPool
      startBlock: 8477156
    mapping:
      kind: ethereum/events
      apiVersion: 0.0.7
      language: wasm/assemblyscript
      entities:
        - Activate
        - BalanceChangedETH
        - CallClosed
        - CallOpened
        - CollectProtocol
        - Deactivate
        - Deposit
        - DepositETH
        - OffMarket
        - OnMarket
        - Paused
        - PreferenceUpdated
        - PremiumReceived
        - Unpaused
        - Withdraw
        - WithdrawETH
      abis:
        - name: CallPool
          file: ./abis/CallPool.json
        - name: NFTOracle
          file: ./abis/NFTOracle.json
      eventHandlers:
        - event: Activate(address)
          handler: handleActivate
        - event: BalanceChangedETH(indexed address,uint256)
          handler: handleBalanceChangedETH
        - event: CallClosed(indexed address,indexed address,address,indexed uint256,uint256)
          handler: handleCallClosed
        - event: CallOpened(indexed address,indexed address,indexed uint256,uint8,uint8,uint256,uint40,uint40)
          handler: handleCallOpened
        - event: CollectProtocol(indexed address,indexed address,uint256)
          handler: handleCollectProtocol
        - event: Deactivate(address)
          handler: handleDeactivate
        - event: Deposit(indexed address,address,indexed address,indexed uint256)
          handler: handleDeposit
        - event: DepositETH(indexed address,indexed address,uint256)
          handler: handleDepositETH
        - event: OffMarket(indexed address,indexed address,indexed uint256)
          handler: handleOffMarket
        - event: OnMarket(indexed address,indexed address,indexed uint256)
          handler: handleOnMarket
        - event: Paused(address)
          handler: handlePaused
        - event: PreferenceUpdated(indexed address,indexed uint256,uint8,uint8,uint256)
          handler: handlePreferenceUpdated
        - event: PremiumReceived(indexed address,indexed address,indexed uint256,uint256,uint256)
          handler: handlePremiumReceived
        - event: Unpaused(address)
          handler: handleUnpaused
        - event: Withdraw(indexed address,indexed address,address,indexed uint256)
          handler: handleWithdraw
        - event: WithdrawETH(indexed address,indexed address,uint256)
          handler: handleWithdrawETH
      file: ./src/call-pool.ts
`
    }

    Object.keys(marketConfig).forEach((nftName) => {
      const callPool = marketConfig[nftName]
      const { CallPool, CallPoolForTest } = callPool

      if (CallPool) {
        subgraph += getSubgraohDataSource(networkName, nftName, CallPool)
      }
      if (CallPoolForTest) {
        subgraphStage += getSubgraohDataSource(networkName, nftName, CallPoolForTest)
      }
    })
    writeFile(path.resolve(SUBGRAPH_TARGET_BASE_PATH, `subgraph.yaml`), subgraph, 'text')
    writeFile(path.resolve(SUBGRAPH_TARGET_BASE_PATH, `subgraph-stage.yaml`), subgraphStage, 'text')
  })

  console.log('[api/protocol/generate] output to', TARGET_BASE_PATH)
}
