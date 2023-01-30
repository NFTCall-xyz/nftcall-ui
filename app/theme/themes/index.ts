import { merge } from 'lodash'

import type { PaletteMode } from '@mui/material'
import type { ThemeOptions } from '@mui/material/styles'
import { createTheme, responsiveFontSizes } from '@mui/material/styles'

import components from './components'
import * as DefaultThemeOptions from './default'

export const themes = {
  default: DefaultThemeOptions,
}

export type Themes = keyof typeof themes

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    paper: string
    default: string
    level2: string
    level1: string
    footer: string
    contrast: string
  }

  interface PaletteOptions {
    cardShadow?: string
    alternate: {
      main: string
      dark: string
    }
  }

  interface Palette {
    cardShadow?: string
    alternate: {
      main: string
      dark: string
    }
  }
}

declare module '@mui/material/styles' {
  interface PaletteColor {
    100: string
    200: string
    300: string
    400: string
  }
}

export const getTheme = (options: ThemeOptions) => {
  const theme = createTheme(options)

  return createTheme(options, {
    zIndex: {
      appBar: 1200,
      drawer: 1300,
    },
    components: components(theme),
  })
}

export type CreateThemeOptionsProps = {
  mode: PaletteMode
  themeOptions: {
    lightThemeOptions: ThemeOptions
    darkThemeOptions: ThemeOptions
  }
}

const withTypography = (options: any) => {
  const returnValue = merge(
    {
      typography: {
        fontFamily: ['Poppins', 'sans-serif'].join(','),
        button: {
          fontWeight: 600,
        },
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 900,
          lg: 1200,
          xl: 1536,
        },
      },
    },
    options
  )
  return returnValue
}

export const createThemeOptions = ({
  mode,
  themeOptions: { lightThemeOptions, darkThemeOptions },
}: CreateThemeOptionsProps) => {
  const options = mode === 'light' ? lightThemeOptions : merge({}, lightThemeOptions, darkThemeOptions)
  return responsiveFontSizes(createTheme(withTypography(options)))
}
