import { noop } from 'lodash'

import handler from 'lib/protocol/dev/api/code-template'

export default __DEV__ ? handler : noop
