import type { FC } from 'react'

import type { BoxProps } from '@mui/material'
import { Box } from '@mui/material'

const FlexBetween: FC<BoxProps> = ({ children, ...props }) => (
  <Box display="flex" alignItems="center" justifyContent="space-between" {...props}>
    {children}
  </Box>
)

export default FlexBetween
