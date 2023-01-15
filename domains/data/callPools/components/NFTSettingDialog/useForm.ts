import { useFormik } from 'formik'
import * as yup from 'yup'

import { catchError } from 'app/utils/catch/error'
import { createToastifyPromise } from 'app/utils/promise/toastify'

import type { NFT } from 'domains/data/nft/types'
import { useCallPools, useNetwork } from 'domains/data'
import { useWallet } from 'domains'
import { transaction } from 'domains/controllers/adapter/transaction'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import { useEffect } from 'react'

const validationSchema = yup.object({
  minStrikePrice: yup.number().required('minStrikePrice is Required!'),
  maxExpriyTime: yup.number().required('maxExpriyTime is Required!'),
})
const initialValues: Pick<NFT, 'minStrikePrice' | 'maxExpriyTime'> = {
  minStrikePrice: 1,
  maxExpriyTime: 3,
}

export const useForm = () => {
  const {
    dialogs: {
      nftSetting: { nft, close },
    },
  } = useCallPools()
  const {
    contracts: { callPoolService },
  } = useNetwork()
  const { networkAccount } = useWallet()
  const sendTransaction = useSendTransaction()
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, formikHelpers) => {
      const { callPoolAddress, tokenId } = nft
      return transaction({
        createTransaction: callPoolService.changePreference({
          callPool: callPoolAddress,
          user: networkAccount,
          tokenId,
          lowerLimitOfStrikePrice: '0',
          lowerStrikePriceGapIdx: values.minStrikePrice,
          upperDurationIdx: values.maxExpriyTime,
        }),
        setStatus: () => {},
        sendTransaction,
        isOnlyApprove: false,
        waitingPromise: (promise) =>
          createToastifyPromise(promise, {
            formikHelpers,
            serializeError: (e: any) => {
              const serializeError = catchError(e)
              return serializeError
            },
          }),
      }).then(() => {
        nft.actions.update()
        close()
      })
    },
  })

  useEffect(() => {
    if (!nft || !nft.tokenId) return
    const { minStrikePrice, maxExpriyTime } = nft
    formik.setValues({
      minStrikePrice,
      maxExpriyTime,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nft])

  return {
    formik,
  }
}

export type FormValue = ReturnType<typeof useForm>
