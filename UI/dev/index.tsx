import type { FC } from 'react'
import Stack from '@mui/material/Stack'

import { I18n } from './I18n'
import { Protocol } from './Protocol'

const Dev: FC = () => {
  return (
    <Stack spacing={2}>
      <I18n />
      <Protocol />
    </Stack>
  )
}

export default Dev
