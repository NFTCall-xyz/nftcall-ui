import { useWallet } from 'domains'
import { useFormik } from 'formik'
import { useEffect } from 'react'
import * as yup from 'yup'

import { catchError } from 'app/utils/catch/error'
import { safeGet } from 'app/utils/get'
import { createToastifyPromise } from 'app/utils/promise/toastify'

import { transaction } from 'domains/controllers/adapter/transaction'
import { useCallPools, useNetwork } from 'domains/data'
import type { NFT } from 'domains/data/nft/types'

import { valueToWei } from 'lib/math'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'

const validationSchema = yup.object({
  minStrikePrice: yup.number().required('minStrikePrice is required!'),
  maxExpriyTime: yup.number().required('maxExpriyTime is required!'),
  lowerLimitOfStrikePrice: yup.string().matches(/^[0-9]*[.,]?[0-9]*$/, 'Lower Limit is a number!'),
})
const initialValues: Pick<NFT, 'minStrikePrice' | 'maxExpriyTime'> & { lowerLimitOfStrikePrice: string } = {
  minStrikePrice: 1,
  maxExpriyTime: 3,
  lowerLimitOfStrikePrice: '0',
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
  const { account } = useWallet()
  const sendTransaction = useSendTransaction()
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, formikHelpers) => {
      const { callPoolAddress, tokenId } = nft
      return transaction({
        createTransaction: callPoolService.changePreference({
          callPool: callPoolAddress,
          user: account,
          tokenIds: [tokenId],
          lowerLimitOfStrikePrice: safeGet(() => valueToWei(values.lowerLimitOfStrikePrice).toString()) || '0',
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
    const { minStrikePrice, maxExpriyTime, lowerLimitOfStrikePrice } = nft
    formik.setValues({
      minStrikePrice,
      maxExpriyTime,
      lowerLimitOfStrikePrice: lowerLimitOfStrikePrice.toString(),
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nft])

  return {
    formik,
  }
}

export type FormValue = ReturnType<typeof useForm>
