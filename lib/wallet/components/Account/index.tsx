import { useWallet } from 'domains'
import type { FC } from 'react'
import { Fragment } from 'react'

import { textCenterEllipsis } from 'app/utils/string/text-center-ellipsis'
import { Paragraph } from 'components/Typography'

type AccountProps = {
  onlyENSName?: boolean
}
export const Account: FC<AccountProps> = ({ onlyENSName }) => {
  const { account, ENSName } = useWallet()

  if (onlyENSName) {
    return <Fragment>{ENSName || textCenterEllipsis(account)}</Fragment>
  }

  return (
    <Fragment>
      {textCenterEllipsis(account)}
      <Paragraph color='text.secondary'>{ENSName && `(${ENSName})`}</Paragraph>
    </Fragment>
  )
}

export default Account
