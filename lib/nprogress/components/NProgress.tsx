import type { FC } from 'react'
import { useSelector } from 'react-redux'

import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import { styled } from '@mui/material/styles'

import { PROGRESS_STATUS } from '../store/helpers'
import { selectPageProgress } from '../store/nprogress'

const ROOT = styled(Box)`
  width: 100%;
  position: absolute;
  top: 0;
`

const NProgress: FC = () => {
  const { value, status } = useSelector(selectPageProgress) || {}
  if (status === PROGRESS_STATUS.ready) return null
  return (
    <ROOT>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          height: 2,
          '.MuiLinearProgress-bar': { height: 2 },
          zIndex: 20000,
        }}
      />
    </ROOT>
  )
}

export default NProgress
