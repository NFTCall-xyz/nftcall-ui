import { useMemo } from 'react'

import type { Breakpoint } from '@mui/material'
import Box from '@mui/material/Box'
import MaterialDialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import type { DialogValues } from 'app/hooks/useDialog'

import Scrollbar from 'components/ScrollBar'
import { DialogCloseIconButton } from 'components/btn/IconButton'

const Dialog: FCC<
  DialogValues & {
    title: string
    actions?: any
    maxWidth?: false | Breakpoint
    fullScreen?: boolean
    fullWidth?: boolean
  }
> = ({ visible, close, title, children, actions, maxWidth, fullScreen, fullWidth }) => {
  const maxWidthMemo = useMemo(() => maxWidth || (fullWidth ? 'lg' : false), [fullWidth, maxWidth])
  return (
    <MaterialDialog
      open={visible}
      onClose={close}
      maxWidth={maxWidthMemo}
      fullScreen={fullScreen}
      fullWidth={fullWidth}
    >
      <Box sx={{ flexGrow: 0, flexShrink: 0, flexBasis: 'auto' }}>
        <DialogCloseIconButton onClick={close} />
        <DialogTitle>{title}</DialogTitle>
      </Box>

      <Box sx={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', overflow: 'hidden' }}>
        <Scrollbar sx={{ maxHeight: '100%' }}>
          <DialogContent>{children}</DialogContent>
        </Scrollbar>
      </Box>

      {actions && (
        <DialogActions sx={{ padding: 3, flexGrow: 0, flexShrink: 0, flexBasis: 'auto' }}>{actions}</DialogActions>
      )}
    </MaterialDialog>
  )
}

export default Dialog
