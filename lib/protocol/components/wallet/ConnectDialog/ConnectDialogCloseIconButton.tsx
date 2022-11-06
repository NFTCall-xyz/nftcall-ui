import type { FC } from 'react'

import { DialogCloseIconButton } from 'components/btn/IconButton'

import { useWallet } from 'domains'

const ConnectDialogCloseIconButton: FC = () => {
  const {
    connectDialog: { close },
  } = useWallet()

  return <DialogCloseIconButton onClick={close} />
}

export default ConnectDialogCloseIconButton
