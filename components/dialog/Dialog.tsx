import type { Breakpoint } from '@mui/material'
import MaterialDialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import type { DialogValues } from 'app/hooks/useDialog'

import { DialogCloseIconButton } from 'components/btn/IconButton'

const Dialog: FCC<
  DialogValues & { title: string; actions?: any; maxWidth?: false | Breakpoint; fullScreen?: boolean, fullWidth?: boolean }
> = ({ visible, close, title, children, actions, maxWidth, fullScreen, fullWidth }) => {
  return (
    <MaterialDialog open={visible} onClose={close} maxWidth={maxWidth || false} fullScreen={fullScreen} fullWidth={fullWidth}>
      <DialogCloseIconButton onClick={close} />
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      {actions && <DialogActions sx={{ padding: 3 }}>{actions}</DialogActions>}
    </MaterialDialog>
  )
}

export default Dialog
