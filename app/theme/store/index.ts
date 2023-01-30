import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { get } from 'lodash'

import type { PaletteMode } from '@mui/material'

import { setItem } from 'app/utils/cache/localStorage'

import type { Themes } from '../themes'

const path = 'theme'
export const THEME_MODE_KEY = 'THEME_MODE'

type SliceState = {
  data: {
    mode: PaletteMode
    theme: Themes
  }
}
const createInitialState = (): SliceState => ({
  data: {
    mode: 'dark',
    theme: 'default',
  },
})

export const {
  actions: { setMode, toggleMode },
  reducer,
} = createSlice({
  name: path,
  initialState: createInitialState(),
  reducers: {
    setMode(state, action: PayloadAction<PaletteMode>) {
      if (state.data.mode === action.payload) return
      state.data.mode = action.payload
      setItem(THEME_MODE_KEY, action.payload)
    },
    toggleMode(state) {
      const mode = state.data.mode === 'dark' ? 'light' : 'dark'
      state.data.mode = mode
      setItem(THEME_MODE_KEY, mode)
    },
  },
})

export const select = (state: any): SliceState => get(state, path)
export const selectData = (state: any): SliceState['data'] => select(state).data

export default reducer
