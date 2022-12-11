import handler from 'store/dev/api/code-template/create-store'
import { noop } from 'lodash'

export default __DEV__ ? handler : noop
