import type { FC } from 'react'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import LanuchApp from './LanuchApp'

const ROOT = styled(Stack)`
  min-width: 300px;
  justify-content: right;
`
const Actions: FC = () => {
  return (
    <ROOT direction="row" spacing={2}>
      <LanuchApp />
    </ROOT>
  )
}

export default Actions
