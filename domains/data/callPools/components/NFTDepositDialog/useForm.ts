import { useFormik } from 'formik'
import * as yup from 'yup'

import { catchError } from 'app/utils/catch/error'
import { createToastifyPromise } from 'app/utils/promise/toastify'

import type { NFT } from 'domains/data/nft/types'
import { useCallPools, useNetwork, useNFT } from 'domains/data'
import { useWallet } from 'domains'
import { transaction } from 'domains/controllers/adapter/transaction'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import { safeGet } from 'app/utils/get'
import { valueToWei } from 'lib/math'

const validationSchema = yup.object({
  minStrikePrice: yup.number().required('minStrikePrice is Required!'),
  maxExpriyTime: yup.number().required('maxExpriyTime is Required!'),
  lowerLimitOfStrikePrice: yup.string().matches(/^[0-9]*[.,]?[0-9]*$/, 'Lower Limit is a number!'),
})
const initialValues: Pick<NFT, 'minStrikePrice' | 'maxExpriyTime'> & { lowerLimitOfStrikePrice: string } = {
  minStrikePrice: 1,
  maxExpriyTime: 3,
  lowerLimitOfStrikePrice: '',
}

export const useForm = () => {
  const {
    dialogs: {
      nftDeposit: { nft, close },
    },
  } = useCallPools()
  const {
    contracts: { callPoolService, erc721Service },
  } = useNetwork()
  const { networkAccount } = useWallet()
  const {
    tokenId: { updateWallet },
  } = useNFT()
  const sendTransaction = useSendTransaction()
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, formikHelpers) => {
      const { callPoolAddress, nftAddress, tokenId } = nft
      return transaction({
        createTransaction: callPoolService.deposit({
          callPool: callPoolAddress,
          user: networkAccount,
          nft: nftAddress,
          tokenId,
          approveService: erc721Service as any,
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
        updateWallet()
        close()
      })
    },
  })

  return {
    formik,
  }
}

export type FormValue = ReturnType<typeof useForm>
