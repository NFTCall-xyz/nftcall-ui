import axios from 'axios'
import { usePost } from 'app/hooks/request'
import type { DataFetcherReq } from './types'

const dataFetcher = (data: DataFetcherReq) => axios.post('/api/store/code-template/create-store', data)

export const useRequest = () => {
  const request = usePost(dataFetcher)
  return request
}
