import type { ThunkAction, Action } from '@reduxjs/toolkit'
import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

import theme from 'app/theme/store'
import nprogress from 'lib/nprogress/store/nprogress'

import oracle from './oracle'
import nft from './nft'
import user from './user'

export function makeStore() {
  return configureStore({
    reducer: {
      theme,
      nprogress,
      oracle,
      nft,
      user,
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>

export default store

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
