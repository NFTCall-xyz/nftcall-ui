import { useWallet } from 'domains'
import type { FC } from 'react'
import { Fragment } from 'react'

import { textCenterEllipsis } from 'app/utils/string/text-center-ellipsis'

export const Account: FC = () => {
  const { account } = useWallet()

  return <Fragment>{textCenterEllipsis(account)}</Fragment>
}

export default Account
