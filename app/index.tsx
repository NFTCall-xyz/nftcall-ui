import ActiveLayout from 'UI/layouts'
import type { AppProps } from 'next/app'

import CssBaseline from '@mui/material/CssBaseline'

import { createContext } from 'app/utils/createContext'

import { useRouteChange } from 'lib/nprogress/router'
import { ToastContainer } from 'lib/toastify'

import { useMenu } from './router/useMenu'
import ThemeProvider from './theme'
import type { FCC } from './types'

export function useAppService() {
  useRouteChange()
  const menu = useMenu()
  return { menu }
}

export const { Context, Provider: APP, createUseContext } = createContext(useAppService)
export const useApp = createUseContext()

export type MyAppProps = AppProps & {
  emotionCache: any
}
export const Provider: FCC<MyAppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <APP>
        <ActiveLayout>
          <Component {...pageProps} />
        </ActiveLayout>
        <ToastContainer />
      </APP>
    </ThemeProvider>
  )
}
export default Provider
