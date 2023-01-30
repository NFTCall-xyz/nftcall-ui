import type { FormikHelpers } from 'formik'

import { toast } from 'lib/toastify'

import { catchError } from '../catch/error'
import { safeGet } from '../get'

type Options = {
  formikHelpers?: FormikHelpers<any>
  serializeError?: (e: any) => { message: string; errors: any }
}
export function createToastifyPromise<T = void>(p: Promise<T>, options: Options = {}) {
  const { formikHelpers } = options
  const toastId = toast.loading('Transaction is pending', {
    position: toast.POSITION.BOTTOM_RIGHT,
  })

  return p
    .then((data?: T) => {
      toast.update(toastId, { render: 'Transaction success 👌', type: 'success', isLoading: false, autoClose: 5000 })
      return data
    })
    .catch((e) => {
      options.serializeError = options.serializeError || catchError
      const serializeError = safeGet(() => options.serializeError(e)) || ({} as undefined)
      formikHelpers?.setErrors(serializeError.errors)
      toast.update(toastId, {
        render: serializeError.message || 'Transaction rejected 🤯',
        type: 'error',
        isLoading: false,
        autoClose: 5000,
      })
      return serializeError
    })
    .finally(() => {
      formikHelpers?.setSubmitting(false)
    })
}
