import { useWallet } from 'domains'
import type { FC } from 'react'
import { ROOT } from 'styles/dialog'

import Dialog from '@mui/material/Dialog'

import ChainDialogCloseIconButton from './ChainDialogCloseIconButton'
import ChainDialogContent from './ChainDialogContent'
import ChainDialogTitle from './ChainDialogTitle'

const ChainDialog: FC = () => {
  const {
    dialogs: {
      chainDialog: { visible, close },
    },
  } = useWallet()

  return (
    <Dialog onClose={close} open={visible}>
      <ROOT>
        <ChainDialogCloseIconButton />
        <ChainDialogTitle />
        <ChainDialogContent />
      </ROOT>
    </Dialog>
  )
}

export default ChainDialog
