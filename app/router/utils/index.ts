import { useRouter } from 'next/router'
import { useCallback } from 'react'

import { replaceBaseUrl } from 'app/utils/url/base-url'

export const createUseTo = (baseUrl: string) => {
  return () => {
    const router = useRouter()
    const replace = useCallback(() => {
      const to = replaceBaseUrl(router.asPath, baseUrl)
      router.replace(to, undefined, { shallow: true })
    }, [router])

    const push = useCallback(() => {
      const to = replaceBaseUrl(router.asPath, baseUrl)
      router.push(to)
    }, [router])

    return {
      replace,
      push,
    }
  }
}
