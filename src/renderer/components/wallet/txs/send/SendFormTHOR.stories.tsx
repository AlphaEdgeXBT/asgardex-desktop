import { Meta } from '@storybook/react'
import { Network, TxHash } from '@xchainjs/xchain-client'
import { assetAmount, assetToBase, BaseAmount, baseAmount } from '@xchainjs/xchain-util'
import * as FP from 'fp-ts/lib/function'
import * as O from 'fp-ts/lib/Option'
import * as Rx from 'rxjs'

import { thorDetails } from '../../../../../shared/api/types'
import { getMockRDValueFactory, RDStatus } from '../../../../../shared/mock/rdByStatus'
import { mockValidatePassword$ } from '../../../../../shared/mock/wallet'
import { AssetRuneNative } from '../../../../../shared/utils/asset'
import { WalletType } from '../../../../../shared/wallet/types'
import { useThorchainQueryContext } from '../../../../contexts/ThorchainQueryContext'
import { mockWalletBalance } from '../../../../helpers/test/testWalletHelper'
import { FeeRD, SendTxStateHandler } from '../../../../services/chain/types'
import { ApiError, ErrorId, WalletBalance } from '../../../../services/wallet/types'
import { SendFormTHOR as Component } from './SendFormTHOR'

type Args = {
  txRDStatus: RDStatus
  feeRDStatus: RDStatus
  balance: string
  validAddress: boolean
  walletType: WalletType
}

const Template = ({ txRDStatus, feeRDStatus, balance, validAddress, walletType }: Args) => {
  const transfer$: SendTxStateHandler = (_) =>
    Rx.of({
      steps: { current: txRDStatus === 'initial' ? 0 : 1, total: 1 },
      status: FP.pipe(
        txRDStatus,
        getMockRDValueFactory<ApiError, TxHash>(
          () => 'tx-hash',
          () => ({
            msg: 'error message',
            errorId: ErrorId.SEND_TX
          })
        )
      )
    })

  const feeRD: FeeRD = FP.pipe(
    feeRDStatus,
    getMockRDValueFactory<Error, BaseAmount>(
      () => baseAmount(2000000),
      () => Error('getting fees failed')
    )
  )
  const { thorchainQuery } = useThorchainQueryContext()

  const dexBalance: WalletBalance = mockWalletBalance({
    amount: assetToBase(assetAmount(balance))
  })

  return (
    <Component
      asset={{
        asset: AssetRuneNative,
        walletAddress: 'thorxyz',
        walletType,
        walletAccount: 0,
        walletIndex: 0,
        hdMode: 'default'
      }}
      transfer$={transfer$}
      balances={[dexBalance]}
      balance={dexBalance}
      addressValidation={(_: string) => validAddress}
      fee={feeRD}
      reloadFeesHandler={() => console.log('reload fees')}
      validatePassword$={mockValidatePassword$}
      network={Network.Testnet}
      openExplorerTxUrl={(txHash: TxHash) => {
        console.log(`Open explorer - tx hash ${txHash}`)
        return Promise.resolve(true)
      }}
      thorchainQuery={thorchainQuery}
      getExplorerTxUrl={(txHash: TxHash) => O.some(`url/asset-${txHash}`)}
      poolDetails={[]}
      oPoolAddress={O.none}
      dex={thorDetails}
    />
  )
}
export const Default = Template.bind({})

const meta: Meta<typeof Template> = {
  component: Template,
  title: 'Wallet/SendFormTHOR',
  argTypes: {
    txRDStatus: {
      control: { type: 'select', options: ['pending', 'error', 'success'] }
    },
    feeRDStatus: {
      control: { type: 'select', options: ['initial', 'pending', 'error', 'success'] }
    },
    walletType: {
      control: { type: 'select', options: ['keystore', 'ledger'] }
    },
    balance: {
      control: { type: 'text' }
    }
  },
  args: {
    txRDStatus: 'success',
    feeRDStatus: 'success',
    walletType: 'keystore',
    balance: '2',
    validAddress: true
  }
}

export default meta
