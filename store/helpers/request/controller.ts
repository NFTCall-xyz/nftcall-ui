import { useRef, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { AsyncThunk } from '@reduxjs/toolkit'

import { useLatest } from 'app/hooks/useLatest'
import { useObjectMemo } from 'app/hooks/useValues'
import { useAppDispatch } from 'store'

import type { RequestSliceState } from './state'
import { REQUEST_STATUS } from './state'
import type { RequestSelect } from './select'
import type { RequestActions } from './reducers'
import { safeGet } from 'app/utils/get'

type CreateUseRequestControllerProps<SliceState extends RequestSliceState, Returned, ThunkArg> = {
  request: AsyncThunk<Returned, ThunkArg, {}>
  select: RequestSelect<SliceState>
  actions: RequestActions
}

export const createUseRequestController = <SliceState extends RequestSliceState, Returned, ThunkArg>(
  props: CreateUseRequestControllerProps<SliceState, Returned, ThunkArg>
) => {
  const {
    request,
    select: { selectStatus },
    actions: { setStatus: setStatusAction },
  } = props

  const useStatus = () => {
    const status = useSelector(selectStatus)
    const dispatch = useAppDispatch()
    const statusRef = useLatest(status)
    const setStatus = useCallback(
      (status: REQUEST_STATUS) => {
        dispatch(setStatusAction(status))
        statusRef.current = status
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [dispatch]
    )
    const getStatus = useCallback(() => {
      return statusRef.current
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return {
      setStatus,
      getStatus,
    }
  }

  const usePolling = () => {
    const dispatch = useAppDispatch()
    const { setStatus, getStatus } = useStatus()
    const abortFnRef = useRef<() => void>()
    const timerRef = useRef<ReturnType<typeof setTimeout>>()
    const propsRef = useRef({} as any)
    const run = useCallback(
      (props: ThunkArg, ms = 5000) => {
        propsRef.current = { ms, props }
        const status = getStatus()
        if (status !== REQUEST_STATUS.ready) return Promise.reject({ name: 'RunningError', message: 'Running' })
        setStatus(REQUEST_STATUS.polling)

        const fn = () => {
          const promise = dispatch(request(props))
          abortFnRef.current = () => promise.abort()
          return promise.then((action: any) => {
            if (action.error?.name === 'AbortError') return
            timerRef.current = setTimeout(() => fn(), ms)
          })
        }

        fn()

        return Promise.resolve()
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [dispatch]
    )

    const stop = useCallback(() => {
      const status = getStatus()
      if (status !== REQUEST_STATUS.polling) return

      setStatus(REQUEST_STATUS.ready)
      if (abortFnRef.current) abortFnRef.current()
      clearTimeout(timerRef.current)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    const restart = useCallback((props?: ThunkArg, ms?: number) => {
      const status = getStatus()
      if (status !== REQUEST_STATUS.polling) return
      stop()
      run(props || propsRef.current.props, ms || propsRef.current.ms || 5000)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const returnValue = useObjectMemo({
      run,
      stop,
      restart,
    })

    // useWhyDidYouUpdate('usePolling', returnValue)
    return returnValue
  }

  const useSingle = () => {
    const { setStatus, getStatus } = useStatus()
    const dispatch = useAppDispatch()
    const abortFnRef = useRef<() => void>()

    const run = useCallback(
      (props: ThunkArg) => {
        const status = getStatus()
        if (status !== REQUEST_STATUS.ready) return Promise.reject({ name: 'RunningError', message: 'Running' })
        setStatus(REQUEST_STATUS.single)
        const promise = dispatch(request(props))
        abortFnRef.current = () => promise.abort()
        return promise
          .then((action: any) => {
            if (action.error) return Promise.reject(action)
            return safeGet(() => action.payload.data || action.payload)
          })
          .finally(() => {
            setStatus(REQUEST_STATUS.ready)
          })
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [dispatch]
    )

    const stop = useCallback(() => {
      const status = getStatus()
      if (status !== REQUEST_STATUS.single) return

      setStatus(REQUEST_STATUS.ready)
      if (abortFnRef.current) abortFnRef.current()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    const returnValue = useObjectMemo({
      run,
      stop,
    })

    // useWhyDidYouUpdate('useSingle', returnValue)
    return returnValue
  }

  const useRequestController = () => {
    const polling = usePolling()
    const single = useSingle()

    const useAutoPolling = useCallback(
      (query: ThunkArg, isStop: (query: ThunkArg) => boolean, ms: number, delay = 500) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
          if (isStop(query)) return
          const timer = setTimeout(() => {
            polling.run(query, ms)
          }, delay)
          return () => {
            clearTimeout(timer)
            polling.stop()
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [query])
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      []
    )

    const returnValue = useObjectMemo({
      polling,
      single,
      usePolling: useAutoPolling,
    })
    return returnValue
  }

  return useRequestController
}
