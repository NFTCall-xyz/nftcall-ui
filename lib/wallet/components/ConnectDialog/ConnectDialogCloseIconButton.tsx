import { useWallet } from 'domains'
import type { FC } from 'react'

import { DialogCloseIconButton } from 'components/btn/IconButton'

const ConnectDialogCloseIconButton: FC = () => {
  const {
    dialogs: {
      connectDialog: { close },
    },
  } = useWallet()

  return <DialogCloseIconButton onClick={close} />
}

export default ConnectDialogCloseIconButton
