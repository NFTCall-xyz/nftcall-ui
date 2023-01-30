import { useEffect, useState } from 'react'

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
  const [callPoolId, setCallPoolId] = useState('')

  return {
    value: callPoolId,
    set: setCallPoolId,
  }
}
