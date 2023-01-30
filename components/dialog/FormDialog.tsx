import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import type { DialogValues } from 'app/hooks/useDialog'

import SubmitBotton from 'components/form/SubmitBotton'

const FormDialog: FCC<DialogValues & { title: string; submit: () => Promise<any>; isSubmitting: boolean }> = ({
  visible,
  close,
  title,
  submit,
  children,
  isSubmitting,
}) => {
  return (
    <Dialog open={visible} onClose={close}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={close}>Cancel</Button>
        <SubmitBotton
          onClick={() =>
            submit().then(() => {
              close()
            })
          }
          isSubmitting={isSubmitting}
        >
          Submit
        </SubmitBotton>
      </DialogActions>
    </Dialog>
  )
}

export default FormDialog
