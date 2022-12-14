import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '0x9C21123D94b93361a29B2C2EFB3d5CD8B17e0A9e',
      10001: '0xc64e2d765eD732A6e0E42B59d16e4B7e25031231',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 251,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      10001: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    },
    token: serializedTokens.cake,
    quoteToken: serializedTokens.wbnb,
  }
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
