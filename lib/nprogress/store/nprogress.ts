import { createProgressSlice } from './helpers'

const key = 'nprogress'

export const {
  reducer,
  useProgressController: usePageProgressController,
  select: selectPageProgress,
} = createProgressSlice(key)

export default reducer
