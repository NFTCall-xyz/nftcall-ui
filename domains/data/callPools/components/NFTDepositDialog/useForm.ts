import { useFormik } from 'formik'
import * as yup from 'yup'

import { catchError } from 'app/utils/catch/error'
import { createToastifyPromise } from 'app/utils/promise/toastify'

import type { NFT } from 'domains/data/nft/types'
import { useCallPools, useNetwork, useNFT } from 'domains/data'
import { useWallet } from 'domains'
import { transaction } from 'domains/controllers/adapter/transaction'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'

const validationSchema = yup.object({
  minStrikePrice: yup.number().required('minStrikePrice is Required!'),
  maxExpriyTime: yup.number().required('maxExpriyTime is Required!'),
})
const initialValues: Pick<NFT, 'minStrikePrice' | 'maxExpriyTime'> = {
  minStrikePrice: 0,
  maxExpriyTime: 3,
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
        updateWallet()
        close()
      })
    },
  })

  // useEffect(() => {
  //   if (!row.id) return
  //   formik.setFieldValue('money', parseFloat(row.payedMoney as any))
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [row.id])

  return {
    formik,
  }
}

export type FormValue = ReturnType<typeof useForm>
