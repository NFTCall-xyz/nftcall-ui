import ActiveLayout from 'UI/layouts'
import type { AppProps } from 'next/app'

import CssBaseline from '@mui/material/CssBaseline'

import { createContextWithProvider } from 'app/utils/createContext'

import MotionProvider from 'lib/framer-motion'
import { useRouteChange } from 'lib/nprogress/router'
import { ToastContainer } from 'lib/toastify'

import { useMenu } from './router/useMenu'
import { useSetting } from './setting'
import ThemeProvider from './theme'
import type { FCC } from './types'

export function useAppService() {
  useRouteChange()
  const menu = useMenu()
  const setting = useSetting()
  return { menu, setting }
}

export const { Context, Provider: APP, createUseContext } = createContextWithProvider(useAppService)
export const useApp = createUseContext()

export type MyAppProps = AppProps & {
  emotionCache: any
}
export const Provider: FCC<MyAppProps> = (props) => {
  return (
    <ThemeProvider>
      <CssBaseline enableColorScheme />
      <MotionProvider>
        <APP>
          <ActiveLayout {...props} />
          <ToastContainer />
        </APP>
      </MotionProvider>
    </ThemeProvider>
  )
}
export default Provider
