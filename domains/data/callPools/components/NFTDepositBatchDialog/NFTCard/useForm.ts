import { useFormik } from 'formik'
import { useImmer } from 'use-immer'
import * as yup from 'yup'

import type { NFT } from 'domains/data/nft/types'
import { getNFTId } from 'domains/data/nft/utils/id'

import type { NFTDepositForm, NFTDepositFormProps } from '../types'

const validationSchema = yup.object({
  minStrikePrice: yup.number().required('minStrikePrice is Required!'),
  maxExpriyTime: yup.number().required('maxExpriyTime is Required!'),
  lowerLimitOfStrikePrice: yup.string().matches(/^[0-9]*[.,]?[0-9]*$/, 'Lower Limit is a number!'),
})

const defaultInitialValues = {
  minStrikePrice: 1,
  maxExpriyTime: 3,
  lowerLimitOfStrikePrice: '',
}
const getInitialValues = (nft: Partial<NFT> = {}): NFTDepositForm => {
  const {
    minStrikePrice = defaultInitialValues.minStrikePrice,
    maxExpriyTime = defaultInitialValues.maxExpriyTime,
    lowerLimitOfStrikePrice,
  } = nft
  return {
    minStrikePrice,
    maxExpriyTime,
    lowerLimitOfStrikePrice: lowerLimitOfStrikePrice
      ? lowerLimitOfStrikePrice.toString()
      : defaultInitialValues.lowerLimitOfStrikePrice,
  }
}

export const useForm = ({ nft, formikStorage }: NFTDepositFormProps) => {
  const id = getNFTId(nft)
  const [initialValues] = useImmer(getInitialValues(nft))
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      return Promise.resolve({
        ...nft,
        ...values,
      })
    },
  })

  formikStorage.useInstance(id, formik)

  return {
    formik,
  }
}

export const useSettingForm = () => {
  const [initialValues] = useImmer(getInitialValues())

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => Promise.resolve(values),
  })

  return {
    formik,
  }
}

export type FormValue = ReturnType<typeof useForm>
