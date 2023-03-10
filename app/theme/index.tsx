import { useMemo } from 'react'
import { useAppSelector } from 'store'

import { ThemeProvider } from '@mui/material/styles'

import { createContextWithProvider } from 'app/utils/createContext'

import { selectData } from './store'
import { createThemeOptions, getTheme, themes } from './themes'

export const useThemeService = () => {
  const storeData = useAppSelector(selectData)

  const theme = useMemo(() => {
    const { mode, theme } = storeData
    const returnValue = getTheme(
      createThemeOptions({
        mode: mode,
        themeOptions: themes[theme],
      })
    )
    if (!__SERVER__ && __DEV__) {
      ;(window as any).theme = returnValue
      console.log('[@mui/material/styles] theme update', {
        mode,
        theme: returnValue,
      })
    }
    return returnValue
  }, [storeData])

  return {
    theme,
  }
}

export const { Context, Provider: BaseThemeProvider, createUseContext } = createContextWithProvider(useThemeService)
export const useBaseTheme = createUseContext()

const Theme: FCC = (props) => {
  const { theme } = useBaseTheme()
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
}

const BaseTheme: FCC = (props) => {
  return (
    <BaseThemeProvider>
      <Theme>{props.children}</Theme>
    </BaseThemeProvider>
  )
}

export default BaseTheme
