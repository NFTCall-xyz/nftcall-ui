import { useCallback } from 'react'
import { useImmer } from 'use-immer'

import { getItem, setItem } from 'app/utils/cache/localStorage'

type DisplayMode = 'card' | 'list'

export function useSetting() {
  const [displayMode, setDisplayModeInternal] = useImmer<DisplayMode>(getItem('setting.displayMode') || 'card')
  const setDisplayMode = useCallback(
    (displayMode: DisplayMode) => {
      setDisplayModeInternal(displayMode)
      setItem('setting.displayMode', displayMode)
    },
    [setDisplayModeInternal]
  )

  return {
    displayMode,
    setDisplayMode,
  }
}
