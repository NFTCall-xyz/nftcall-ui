import { noop } from 'lodash'

import handler from 'lib/protocol/dev/api/generate'

export default __DEV__ ? handler : noop
