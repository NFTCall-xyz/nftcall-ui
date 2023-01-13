import path from 'path'
import { requireFromPath } from 'app/utils/require'
import { writeFile } from 'app/utils/fs'

const ROOT_PATH = process.cwd()

const SOURCE_BASE_PATH = path.resolve(ROOT_PATH, 'lib/protocol/src')
const DEPLOYED_CONTRACTS_PATH = path.resolve(SOURCE_BASE_PATH, 'deployed-contracts-base.json')
const DEPLOYED_MARKET_CONTRACTS_PATH = path.resolve(SOURCE_BASE_PATH, 'deployed-contracts-pool.json')

const TARGET_BASE_PATH = path.resolve(ROOT_PATH, 'lib/protocol/generate')

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

  Object.keys(networks).forEach((name) => {
    writeFile(path.resolve(TARGET_BASE_PATH, `${name}.json`), {
      ...networks[name],
      markets: markets[name],
    })
  })

  console.log('[api/protocol/generate] output to', TARGET_BASE_PATH)
}
