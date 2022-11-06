import type { FC } from 'react'
import Dialog from '@mui/material/Dialog'

import { ROOT } from 'styles/dialog'
import { useWallet } from 'domains'

import ChainDialogCloseIconButton from './ChainDialogCloseIconButton'
import ChainDialogTitle from './ChainDialogTitle'
import ChainDialogContent from './ChainDialogContent'

const ChainDialog: FC = () => {
  const {
    chainDialog: { visible, close },
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
