import { useCallback, useMemo, useState } from 'react'
import { usePost } from '.'

const getDefaultData = (data: any) => data
const isDefaultNoValidQuery = () => false
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
}
export const useLoadMore = <T extends any[], Q, D extends any[] = T>({
  pageSize,
  request,
  getQuery,
  getData,
  isNoValidQuery,
}: LoadMoreProps<T, Q, D>) => {
  pageSize = pageSize || 10
  getData = getData || getDefaultData
  isNoValidQuery = isNoValidQuery || isDefaultNoValidQuery

  const [data, setData] = useState<D>([] as any)
  const [pageIndex, setPageIndex] = useState(0)
  const [noMoreData, setNoMoreData] = useState(false)
  const skip = useMemo(() => pageIndex * pageSize, [pageIndex, pageSize])
  const { post, loading, cancel } = usePost(request)

  const onLoadMore = useCallback(() => {
    if (noMoreData) return Promise.resolve()
    setPageIndex(pageIndex + 1)
    const query = getQuery({ skip, first: pageSize })
    if (isNoValidQuery(query)) return Promise.resolve()
    return post(query).then((data) => {
      if (data.length < pageSize) setNoMoreData(true)
      setData((array) => array.concat(getData(data)) as any)
    })
  }, [getData, getQuery, isNoValidQuery, noMoreData, pageIndex, pageSize, post, skip])

  const restart = useCallback(() => {
    cancel()
    setPageIndex(0)
    setNoMoreData(false)
    setData(() => [] as any)
    onLoadMore()
  }, [cancel, onLoadMore])

  return {
    data,
    noMoreData,
    disabled: loading,
    onLoadMore,
    restart,
  }
}
