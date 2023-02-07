import { useEffect } from 'react'
import { useImmer } from 'use-immer'

import { useUnmount } from 'app/hooks/useUnmount'

import { useCallPoolDetails } from 'domains/data'

export const useCallPoolIdEffect = (props: any) => {
  const { callPoolId } = useCallPoolDetails()

  useEffect(() => {
    callPoolId.set(props.id)
  }, [callPoolId, props.id])

  useUnmount(() => {
    callPoolId.set(undefined)
  })
}

export const useCallPoolId = () => {
  const [callPoolId, setCallPoolId] = useImmer('')

  return {
    value: callPoolId,
    set: setCallPoolId,
  }
}
