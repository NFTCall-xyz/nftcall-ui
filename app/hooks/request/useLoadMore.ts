import { useCallback, useEffect, useMemo } from 'react'
import { useImmer } from 'use-immer'

import { usePost } from '.'

const getDataDefault = (data: any) => data
const isNoValidQueryDefault = () => false
const isNoMoreDataDefault = (pageSize: number, data: any[]) => data.length < pageSize
export type GetQueryProps = {
  skip: number
  first: number
}
export type LoadMoreProps<T extends any[], Q, D extends any[] = T> = {
  pageSize?: number
  request: (query: Q) => Promise<T>
  getQuery: (props: GetQueryProps) => Q
  isNoValidQuery?: (query: Q) => boolean
  getData?: (data: T) => D
  isNoMoreData?: (pageSize: number, data: T) => boolean
}
export const useLoadMore = <T extends any[], Q, D extends any[] = T>({
  pageSize,
  request,
  getQuery,
  getData,
  isNoValidQuery,
  isNoMoreData,
}: LoadMoreProps<T, Q, D>) => {
  pageSize = pageSize || 10
  getData = getData || getDataDefault
  isNoValidQuery = isNoValidQuery || isNoValidQueryDefault
  isNoMoreData = isNoMoreData || isNoMoreDataDefault

  const [data, setData] = useImmer<D>([] as any)
  const [pageIndex, setPageIndex] = useImmer(0)
  const [noMoreData, setNoMoreData] = useImmer(false)
  const [onRestart, setRestart] = useImmer(false)
  const skip = useMemo(() => pageIndex * pageSize, [pageIndex, pageSize])
  const { post, loading, cancel } = usePost(request)

  const onLoadMore = useCallback(() => {
    if (noMoreData) return Promise.resolve()
    setPageIndex(pageIndex + 1)
    const query = getQuery({ skip, first: pageSize })
    if (isNoValidQuery(query)) return Promise.resolve()
    return post(query).then((data) => {
      if (isNoMoreData(pageSize, data)) setNoMoreData(true)
      setData((array) => array.concat(getData(data)) as any)
    })
  }, [
    getData,
    getQuery,
    isNoMoreData,
    isNoValidQuery,
    noMoreData,
    pageIndex,
    pageSize,
    post,
    setData,
    setNoMoreData,
    setPageIndex,
    skip,
  ])

  const restart = useCallback(() => {
    cancel()
    setPageIndex(0)
    setNoMoreData(false)
    setData(() => [] as any)
    setRestart(true)
  }, [cancel, setData, setNoMoreData, setPageIndex, setRestart])

  useEffect(() => {
    if (!onRestart) return
    setRestart(false)
    onLoadMore()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onRestart])

  return {
    data,
    noMoreData,
    disabled: loading,
    onLoadMore,
    restart,
  }
}
