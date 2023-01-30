import { noop } from 'lodash'

import handler from 'app/i18n/dev/api/generate'

export default __DEV__ ? handler : noop
