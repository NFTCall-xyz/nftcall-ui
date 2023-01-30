import { useControllers } from 'domains'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { safeGet } from 'app/utils/get'

export const useRouteChange = () => {
  const router = useRouter()
  const { pageProcess } = useControllers()
  useEffect(() => {
    const handleRouteChangeStart = (url: string, { shallow }: any) => {
      if (!shallow) {
        pageProcess.start()
      }
    }

    const handleRouteChangeDone = (url: string, { shallow }: any) => {
      if (!safeGet(() => shallow)) {
        pageProcess.done()
      }
    }

    const handleRouteChangeError = (error: any, url: string) => {
      pageProcess.done()
      if (error.cancelled) {
        return safeGet(() => (window.location.pathname = url))
      }
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeDone)
    router.events.on('routeChangeError', handleRouteChangeError)
    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeDone)
      router.events.off('routeChangeError', handleRouteChangeError)
    }
  }, [pageProcess, router])
}
