import { useMemo } from 'react'

import ArrowDownward from '@mui/icons-material/ArrowDownward'
import ArrowUpward from '@mui/icons-material/ArrowUpward'
import type { TypographyTypeMap } from '@mui/material'
import { Stack } from '@mui/material'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import type { FCC } from 'app/types'

import { toBN } from 'lib/math'

type RiseOrFallProps = { value: any; displayIcon?: boolean } & TypographyTypeMap<{}, 'div'>['props']
const RiseOrFall: FCC<RiseOrFallProps> = ({ value, displayIcon, children, ...props }) => {
  const theme = useTheme()
  const bn = useMemo(() => toBN(value), [value])
  const isZero = useMemo(() => bn.isNaN() || bn.isZero(), [bn])
  const color = useMemo(() => {
    if (isZero) return theme.palette.text.primary
    if (bn.gt(0)) return theme.palette.success.main
    return theme.palette.error.main
  }, [bn, isZero, theme.palette.error.main, theme.palette.success.main, theme.palette.text.primary])

  const icon = useMemo(() => {
    if (!bn.s || !displayIcon) return null
    return bn.s > 0 ? <ArrowUpward /> : <ArrowDownward />
  }, [bn, displayIcon])

  return (
    <Typography component="div" {...props} color={color}>
      <Stack spacing={1} direction="row" alignItems="center">
        {icon}
        {children}
      </Stack>
    </Typography>
  )
}

export default RiseOrFall
