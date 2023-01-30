import { noop } from 'lodash'

import handler from 'store/dev/api/code-template/create-store'

export default __DEV__ ? handler : noop
