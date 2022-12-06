import handler from 'lib/protocol/dev/api/code-template'
import { noop } from 'lodash'

export default __DEV__ ? handler : noop
