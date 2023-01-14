import { useControllers } from 'domains'
import { useCallback, useMemo } from 'react'
import type { PreviewOpenCallProps } from 'store/callPool/previewOpenCall/adapter'
import { getStoreCacheData } from 'store/callPool/previewOpenCall/adapter'
import type { CallPool } from '..'

export const usePreviewOpenCall = ({ address, nftOracle }: CallPool) => {
  const {
    callPool: {
      previewOpenCall: { usePolling, polling },
    },
  } = useControllers()

  const query: PreviewOpenCallProps = useMemo(
    () => ({
      callPool: address.CallPool,
      nftOracle,
      getStoreCacheData,
    }),
    [address.CallPool, nftOracle]
  )

  usePolling(query, (query) => !query.callPool || !query.nftOracle || !query.nftOracle.vol, 1000 * 60)

  const updatePreviewOpenCall = useCallback(() => {
    polling.restart()
  }, [polling])

  return {
    updatePreviewOpenCall,
  }
}
