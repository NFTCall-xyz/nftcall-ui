import { useCallback } from 'react'
import { useImmer } from 'use-immer'

import { useMount } from 'app/hooks/useMount'
import { getItem, setItem } from 'app/utils/cache/localStorage'

type DisplayMode = 'card' | 'list'

export function useSetting() {
  const [displayMode, setDisplayModeInternal] = useImmer<DisplayMode>('card')
  const setDisplayMode = useCallback(
    (displayMode: DisplayMode) => {
      setDisplayModeInternal(displayMode)
      setItem('setting.displayMode', displayMode)
    },
    [setDisplayModeInternal]
  )

  useMount(() => {
    const cacheDisplayMode = getItem('setting.displayMode')
    if (cacheDisplayMode) setDisplayMode(cacheDisplayMode)
  })

  return {
    displayMode,
    setDisplayMode,
  }
}
