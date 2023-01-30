import type { ThemeOptions } from '@mui/material/styles'

import { darkPalette, lightPalette } from './colors'
import { getShadows } from './utils'

export const lightThemeOptions: ThemeOptions = {
  palette: {
    ...lightPalette,
    alternate: {
      main: '#f7faff',
      dark: '#edf1f7',
    },
    // cardShadow: 'rgba(23, 70, 161, .11)',
    mode: 'light',
  },
  shadows: getShadows('#9e9e9e'),
}

export const darkThemeOptions: ThemeOptions = {
  palette: {
    ...darkPalette,
    alternate: {
      main: '#1a2138',
      dark: '#151a30',
    },
    // cardShadow: 'rgba(0, 0, 0, .11)',
    mode: 'dark',
  },
  shadows: getShadows('#000000'),
}
