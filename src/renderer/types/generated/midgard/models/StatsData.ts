// tslint:disable
/**
 * Midgard Public API
 * The Midgard Public API queries THORChain and any chains linked via the Bifröst and prepares information about the network to be readily available for public users. The API parses transaction event data from THORChain and stores them in a time-series database to make time-dependent queries easy. Midgard does not hold critical information. To interact with BEPSwap and Asgardex, users should query THORChain directly.
 *
 * The version of the OpenAPI document: 2.9.0
 * Contact: devs@thorchain.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface StatsData
 */
export interface StatsData {
    /**
     * Int64, number of deposits since beginning.
     * @type {string}
     * @memberof StatsData
     */
    addLiquidityCount: string;
    /**
     * Int64(e8), total of deposits since beginning. 
     * @type {string}
     * @memberof StatsData
     */
    addLiquidityVolume: string;
    /**
     * Deprecated, it\'s always 0.
     * @type {string}
     * @memberof StatsData
     */
    dailyActiveUsers: string;
    /**
     * Int64(e8), impermanent loss protection paid out. 
     * @type {string}
     * @memberof StatsData
     */
    impermanentLossProtectionPaid: string;
    /**
     * Deprecated, it\'s always 0.
     * @type {string}
     * @memberof StatsData
     */
    monthlyActiveUsers: string;
    /**
     * Int64(e8), current total Rune in the pools.
     * @type {string}
     * @memberof StatsData
     */
    runeDepth: string;
    /**
     * Float, the price of Rune based on the deepest USD pool.
     * @type {string}
     * @memberof StatsData
     */
    runePriceUSD: string;
    /**
     * Int64, number of swaps (including synths) since beginning.
     * @type {string}
     * @memberof StatsData
     */
    swapCount: string;
    /**
     * Int64(e8), number of swaps (including synths) in the last 24h.
     * @type {string}
     * @memberof StatsData
     */
    swapCount24h: string;
    /**
     * Int64, number of swaps (including synths) in the last 30d.
     * @type {string}
     * @memberof StatsData
     */
    swapCount30d: string;
    /**
     * Int64(e8), total volume of swaps (including synths) denoted in Rune since beginning. 
     * @type {string}
     * @memberof StatsData
     */
    swapVolume: string;
    /**
     * Int64(e8), amount of native rune switched from erc20 or BEPSwap rune.
     * @type {string}
     * @memberof StatsData
     */
    switchedRune: string;
    /**
     * Int64, number of swaps from Synth to Rune since beginning.
     * @type {string}
     * @memberof StatsData
     */
    synthBurnCount: string;
    /**
     * Int64, number of swaps from Rune to Synth since beginning.
     * @type {string}
     * @memberof StatsData
     */
    synthMintCount: string;
    /**
     * Int64, number of swaps from Rune to Asset since beginning.
     * @type {string}
     * @memberof StatsData
     */
    toAssetCount: string;
    /**
     * Int64, number of swaps from Asset to Rune since beginning.
     * @type {string}
     * @memberof StatsData
     */
    toRuneCount: string;
    /**
     * Deprecated, it\'s always 0.
     * @type {string}
     * @memberof StatsData
     */
    uniqueSwapperCount: string;
    /**
     * Int64, number of withdraws since beginning.
     * @type {string}
     * @memberof StatsData
     */
    withdrawCount: string;
    /**
     * Int64(e8), total of withdraws since beginning. 
     * @type {string}
     * @memberof StatsData
     */
    withdrawVolume: string;
}
