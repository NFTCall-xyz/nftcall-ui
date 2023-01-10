import type { SendTransaction } from 'lib/protocol/hooks/sendTransaction'
import type { EthereumTransactionTypeExtended } from 'lib/protocol/typechain/commons/types'
import { toast } from 'lib/toastify'

export enum TransactionStatus {
  init = 'init',
  ready = 'ready',
  approval = 'approval',
  action = 'action',
  success = 'success',
  error = 'error',
}

const defaultWaitingPromise = (promise: Promise<any>) => {
  return toast.promise(
    promise,
    {
      pending: 'Transaction is pending',
      success: 'Transaction success 👌',
      error: 'Transaction rejected 🤯',
    },
    {
      position: toast.POSITION.BOTTOM_RIGHT,
    }
  )
}

export const transaction = (props: {
  createTransaction: Promise<EthereumTransactionTypeExtended[]>
  setStatus: (status: TransactionStatus) => void
  sendTransaction: SendTransaction
  isOnlyApprove: boolean
  waitingPromise?: (promise: Promise<any>) => Promise<any>
}) => {
  const { createTransaction, setStatus, sendTransaction, isOnlyApprove } = props
  const waitingPromise = props.waitingPromise || defaultWaitingPromise
  setStatus(TransactionStatus.init)

  return waitingPromise(
    Promise.resolve(createTransaction)
      .then((txs) => {
        setStatus(TransactionStatus.ready)
        let approveTxData: EthereumTransactionTypeExtended = undefined
        let actionTxData: EthereumTransactionTypeExtended = undefined
        const approvalTx = txs.find((tx) => tx.txType === 'APPROVAL')
        const actionTx = txs.find((tx) => ['DLP'].includes(tx.txType))

        if (approvalTx) {
          approveTxData = approvalTx
        }
        if (actionTx) {
          actionTxData = actionTx
        }

        return { approveTxData, actionTxData }
      })
      .then(({ approveTxData, actionTxData }) => {
        setStatus(TransactionStatus.approval)
        const approval = () =>
          approveTxData
            ? approveTxData
                .tx()
                .then(sendTransaction)
                .then((txResponse) => {
                  console.log('[txResponse]', txResponse)
                  return txResponse.wait()
                })
            : Promise.resolve()

        const approveAndTransaction = () => {
          if (!actionTxData) {
            setStatus(TransactionStatus.error)
            return Promise.reject()
          }
          return approval()
            .then(() => setStatus(TransactionStatus.action))
            .then(() => actionTxData.tx())
            .then(sendTransaction)
            .then((txResponse) => {
              console.log('[txResponse]', txResponse)
              return txResponse.wait()
            })
            .then(() => {
              console.log('success')
            })
        }

        const onlyApprove = () =>
          approval().then(() => {
            console.log('success')
          })

        return isOnlyApprove ? onlyApprove() : approveAndTransaction()
      })
  )
}
