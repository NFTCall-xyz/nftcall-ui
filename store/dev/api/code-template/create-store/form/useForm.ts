import { useFormik } from 'formik'
import { useEffect, useMemo } from 'react'
import * as yup from 'yup'

import { createToastifyPromise } from 'app/utils/promise/toastify'

import { initialValues } from './constant'
import { useRequest } from './request'

const validationSchema = yup.object({
  storeKey: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z.]*$/, 'storeKey is not valid')
    .required('storeKey is required.'),
})

export const useForm = () => {
  const request = useRequest()
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, formikHelpers) => {
      return createToastifyPromise(request.post(values), {
        formikHelpers,
      })
    },
  })

  const form = useMemo(
    () => ({
      onSubmit: formik.handleSubmit,
      fields: {
        ...initialValues,
      },
    }),
    [formik]
  )

  useEffect(() => {
    console.log('formik.values.serviceName', formik.values.storeKey)
  }, [formik.values.storeKey])

  return {
    formik,
    form,
  }
}
