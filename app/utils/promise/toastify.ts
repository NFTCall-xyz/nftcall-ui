import type { FormikHelpers } from 'formik'

import type { ToastContent, ToastPosition } from 'lib/toastify'
import { toast } from 'lib/toastify'

import { catchError } from '../catch/error'
import { safeGet } from '../get'

type Options = {
  pendingContent?: ToastContent
  resolveContent?: ToastContent
  rejectedContent?: ToastContent
  position?: ToastPosition
  formikHelpers?: FormikHelpers<any>
  serializeError?: (e: any) => { message: string; errors: any }
}
export function createToastifyPromise<T = void>(p: Promise<T>, options: Options = {}) {
  const { position, formikHelpers, pendingContent, resolveContent, rejectedContent } = options
  const toastId = toast.loading(pendingContent || 'Transaction is pending', {
    position: position || toast.POSITION.BOTTOM_RIGHT,
  })

  return p
    .then((data?: T) => {
      toast.update(toastId, {
        render: resolveContent || 'Transaction success 👌',
        type: 'success',
        isLoading: false,
        autoClose: 5000,
      })
      return data
    })
    .catch((e) => {
      options.serializeError = options.serializeError || catchError
      const serializeError = safeGet(() => options.serializeError(e)) || ({} as undefined)
      formikHelpers?.setErrors(serializeError.errors)
      toast.update(toastId, {
        render: rejectedContent || serializeError.message || 'Transaction rejected 🤯',
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
