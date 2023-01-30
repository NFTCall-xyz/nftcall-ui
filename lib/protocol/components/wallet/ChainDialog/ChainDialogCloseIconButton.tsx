import { useWallet } from 'domains'
import type { FC } from 'react'

import { DialogCloseIconButton } from 'components/btn/IconButton'

const ChainDialogCloseIconButton: FC = () => {
  const {
    chainDialog: { close },
  } = useWallet()

  return <DialogCloseIconButton onClick={close} />
}

export default ChainDialogCloseIconButton
