import * as RD from '@devexperts/remote-data-ts'
import { BNBChain, BTCChain, CosmosChain, ETHChain, PolkadotChain, THORChain } from '@xchainjs/xchain-util'
import * as FP from 'fp-ts/lib/function'
import * as Rx from 'rxjs'

import { liveData } from '../../../helpers/rx/liveData'
import { TxTypes } from '../../../types/asgardex'
import * as BNB from '../../binance'
import * as BTC from '../../bitcoin'
import * as THOR from '../../thorchain'
import { ErrorId, TxLD } from '../../wallet/types'
import { SendTxParams } from '../types'

const sendTx$ = ({ asset, recipient, amount, memo, txType, feeOptionKey }: SendTxParams): TxLD => {
  // helper to create `RemoteData<ApiError, never>` observable
  const txFailure$ = (msg: string) =>
    Rx.of(
      RD.failure({
        errorId: ErrorId.SEND_TX,
        msg
      })
    )

  switch (asset.chain) {
    case BNBChain:
      return BNB.sendTx({ recipient, amount, asset, memo })

    case BTCChain:
      return FP.pipe(
        BTC.memoFees$(memo),
        liveData.mapLeft((error) => ({
          errorId: ErrorId.GET_FEES,
          msg: error?.message ?? error.toString()
        })),
        liveData.chain(({ rates }) => BTC.sendTx({ recipient, amount, feeRate: rates[feeOptionKey], memo }))
      )

    case ETHChain:
      // not available yet
      return txFailure$(`Tx stuff has not been implemented for ETH yet`)

    case THORChain: {
      if (txType === TxTypes.SWAP) {
        return THOR.sendDepositTx({ amount, asset, memo })
      }
      return THOR.sendTx({ amount, asset, memo, recipient })
    }

    case CosmosChain:
      // not available yet
      return txFailure$(`Tx stuff has not been implemented for Cosmos yet`)

    case PolkadotChain:
      // not available yet
      return txFailure$(`Tx stuff has not been implemented for Polkadot yet`)
  }
}

export { sendTx$ }