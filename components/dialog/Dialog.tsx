import MaterialDialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import type { DialogValues } from 'app/hooks/useDialog'
import { DialogCloseIconButton } from 'components/btn/IconButton'

const Dialog: FCC<DialogValues & { title: string }> = ({ visible, close, title, children }) => {
  return (
    <MaterialDialog open={visible} onClose={close} maxWidth={false}>
      <DialogCloseIconButton onClick={close} />
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
    </MaterialDialog>
  )
}

export default Dialog
