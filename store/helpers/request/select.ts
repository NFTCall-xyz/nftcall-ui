import { get } from 'lodash'

import type { REQUEST_STATUS, RequestSliceState } from './state'

export const createRequestSelect = <SliceState extends RequestSliceState>(path: string) => {
  const select = (state: any): SliceState => get(state, path)
  const selectLoading = (state: any): boolean => select(state).loading
  const selectStatus = (state: any): REQUEST_STATUS => select(state).status
  const selectData = (state: any): SliceState['data'] => select(state).data
  const selectError = (state: any): SliceState['error'] => select(state).error

  return {
    selectLoading,
    selectStatus,
    selectData,
    selectError,
  }
}

export type RequestSelect<SliceState extends RequestSliceState> = ReturnType<typeof createRequestSelect<SliceState>>
