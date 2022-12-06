import { useFormik } from 'formik'
import * as yup from 'yup'
import { createToastifyPromise } from 'app/utils/promise/toastify'

import { initialValues } from './constant'
import { useRequest } from './request'
import { useMemo } from 'react'

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .matches(/^[a-zA-Z]*$/, 'name is not valid')
    .required('Phone is required.'),
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

  return {
    formik,
    form,
  }
}
