import { useWallet } from 'domains'
import type { FC } from 'react'
import { ROOT } from 'styles/dialog'

import Dialog from '@mui/material/Dialog'

import ConnectDialogCloseIconButton from './ConnectDialogCloseIconButton'
import ConnectDialogContent from './ConnectDialogContent'
import ConnectDialogTitle from './ConnectDialogTitle'

const ConnectDialog: FC = () => {
  const {
    dialogs: {
      connectDialog: { visible, close },
    },
  } = useWallet()

  return (
    <Dialog onClose={close} open={visible}>
      <ROOT>
        <ConnectDialogCloseIconButton />
        <ConnectDialogTitle />
        <ConnectDialogContent />
      </ROOT>
    </Dialog>
  )
}

export default ConnectDialog
