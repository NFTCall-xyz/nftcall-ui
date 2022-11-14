import CssBaseline from '@mui/material/CssBaseline'
import type { AppProps } from 'next/app'

import { createContext } from 'app/utils/createContext'
import { ToastContainer } from 'lib/toastify'
import ActiveLayout from 'UI/layouts'

import ThemeProvider from './theme'

import { useMenu } from './router/useMenu'
import type { FCC } from './types'

import { useRouteChange } from 'lib/nprogress/router'
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
