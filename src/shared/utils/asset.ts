import { AssetARB } from '@xchainjs/xchain-arbitrum'
import { AssetAVAX } from '@xchainjs/xchain-avax'
import { AssetBTC } from '@xchainjs/xchain-bitcoin'
import { AssetBCH } from '@xchainjs/xchain-bitcoincash'
import { AssetBSC } from '@xchainjs/xchain-bsc'
import { AssetATOM } from '@xchainjs/xchain-cosmos'
import { AssetDOGE } from '@xchainjs/xchain-doge'
import { AssetETH } from '@xchainjs/xchain-ethereum'
import { AssetKUJI } from '@xchainjs/xchain-kujira'
import { AssetLTC } from '@xchainjs/xchain-litecoin'
import { AssetCacao, AssetMaya } from '@xchainjs/xchain-mayachain'
import { AssetRuneNative } from '@xchainjs/xchain-thorchain'
import { assetFromStringEx } from '@xchainjs/xchain-util'

const AssetSynthBtc = assetFromStringEx('BTC/BTC')
const AssetSynthEth = assetFromStringEx('ETH/ETH')
const AssetSynthEthUsdc = assetFromStringEx('ETH/USDC-0XA0B86991C6218B36C1D19D4A2E9EB0CE3606EB48')
const AssetSynthEthUsdt = assetFromStringEx('ETH/USDT-0XDAC17F958D2EE523A2206206994597C13D831EC7')
const AssetSynthLTC = assetFromStringEx('LTC/LTC')
const AssetSynthARB = assetFromStringEx('ARB/ETH')
const AssetSynthAVAX = assetFromStringEx('AVAX/AVAX')
const AssetSynthAVAXUSDC = assetFromStringEx('AVAX/USDC-0XB97EF9EF8734C71904D8002F8B6BC66DD9C48A6E')
const AssetSynthATOM = assetFromStringEx('GAIA/ATOM')
const AssetSynthDOGE = assetFromStringEx('DOGE/DOGE')
const AssetSynthKuji = assetFromStringEx('KUJI/KUJI')
const AssetSynthUsk = assetFromStringEx('KUJI/USK')
const AssetSynthBCH = assetFromStringEx('BCH/BCH')
const AssetSynthBSC = assetFromStringEx('BSC/BNB')
const AssetSynthDash = assetFromStringEx('DASH/DASH')

// Re-export to have asset definition at one place only to handle xchain-* changes easily in the future
export {
  AssetBTC,
  AssetCacao,
  AssetMaya,
  AssetSynthBtc,
  AssetSynthLTC,
  AssetSynthARB,
  AssetSynthAVAX,
  AssetSynthAVAXUSDC,
  AssetSynthDOGE,
  AssetSynthKuji,
  AssetSynthEth,
  AssetSynthEthUsdc,
  AssetSynthBCH,
  AssetSynthATOM,
  AssetSynthBSC,
  AssetBCH,
  AssetATOM,
  AssetLTC,
  AssetDOGE,
  AssetBSC,
  AssetARB,
  AssetAVAX,
  AssetETH,
  AssetRuneNative,
  AssetSynthEthUsdt,
  AssetKUJI,
  AssetSynthUsk,
  AssetSynthDash
}
