import { useMemo } from 'react'

import type { ButtonProps } from '@mui/material/Button'
import Button from '@mui/material/Button'

const SubmitBotton: FCC<ButtonProps & { isSubmitting: boolean }> = ({ children, isSubmitting, ...btnProps }) => {
  const text = useMemo(() => (isSubmitting ? 'Submitting' : children), [isSubmitting, children])
  return (
    <Button {...btnProps} type="submit" disabled={isSubmitting}>
      {text}
    </Button>
  )
}

export default SubmitBotton
