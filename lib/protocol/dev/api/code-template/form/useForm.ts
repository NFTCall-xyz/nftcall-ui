import { useFormik } from 'formik'
import { useEffect, useMemo } from 'react'
import * as yup from 'yup'

import { createToastifyPromise } from 'app/utils/promise/toastify'

import { initialValues } from './constant'
import { useRequest } from './request'

const validationSchema = yup.object({
  serviceName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z]*$/, 'serviceName is not valid')
    .required('serviceName is required.'),
  contractName: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z]*$/, 'serviceName is not valid')
    .required('serviceName is required.'),
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
    console.log('formik.values.serviceName', formik.values.serviceName)
  }, [formik.values.serviceName])

  return {
    formik,
    form,
  }
}
