import MaterialDialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import type { DialogValues } from 'app/hooks/useDialog'
import { DialogCloseIconButton } from 'components/btn/IconButton'

const Dialog: FCC<DialogValues & { title: string; actions?: any }> = ({ visible, close, title, children, actions }) => {
  return (
    <MaterialDialog open={visible} onClose={close} maxWidth={false}>
      <DialogCloseIconButton onClick={close} />
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      {actions && <DialogActions sx={{ padding: 3 }}>{actions}</DialogActions>}
    </MaterialDialog>
  )
}

export default Dialog
