import clsx from 'clsx'

import type { BoxProps } from '@mui/material'
import { Box, useTheme } from '@mui/material'

const createEllipsisStyle = () =>
  ({
    display: 'block',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  } as any)

type Props = { ellipsis?: boolean }

export type Typography = FCC<BoxProps & Props>

export const H1: Typography = (props) => {
  const { ellipsis, children, className, ...others } = props

  return (
    <Box
      fontSize={28}
      component="h1"
      fontWeight={600}
      className={clsx({ [className || '']: true })}
      {...{
        ...(ellipsis ? createEllipsisStyle() : {}),
        ...others,
      }}
    >
      {children}
    </Box>
  )
}

export const H2: Typography = (props) => {
  const { ellipsis, children, className, ...others } = props

  return (
    <Box
      fontSize={24}
      component="h2"
      fontWeight={600}
      className={clsx({ [className || '']: true })}
      {...{
        ...(ellipsis ? createEllipsisStyle() : {}),
        ...others,
      }}
    >
      {children}
    </Box>
  )
}

export const H3: Typography = (props) => {
  const { ellipsis, children, className, ...others } = props

  return (
    <Box
      fontSize={18}
      component="h3"
      fontWeight={600}
      className={clsx({ [className || '']: true })}
      {...{
        ...(ellipsis ? createEllipsisStyle() : {}),
        ...others,
      }}
    >
      {children}
    </Box>
  )
}

export const H4: Typography = (props) => {
  const { ellipsis, children, className, ...others } = props

  return (
    <Box
      fontSize={16}
      component="h4"
      fontWeight={600}
      className={clsx({ [className || '']: true })}
      {...{
        ...(ellipsis ? createEllipsisStyle() : {}),
        ...others,
      }}
    >
      {children}
    </Box>
  )
}

export const H5: Typography = (props) => {
  const { ellipsis, children, className, ...others } = props

  return (
    <Box
      fontSize={14}
      component="h5"
      lineHeight={1}
      fontWeight={600}
      className={clsx({ [className || '']: true })}
      {...{
        ...(ellipsis ? createEllipsisStyle() : {}),
        ...others,
      }}
    >
      {children}
    </Box>
  )
}

export const H6: Typography = (props) => {
  const { ellipsis, children, className, ...others } = props

  return (
    <Box
      fontSize={13}
      component="h6"
      fontWeight={600}
      className={clsx({ [className || '']: true })}
      {...{
        ...(ellipsis ? createEllipsisStyle() : {}),
        ...others,
      }}
    >
      {children}
    </Box>
  )
}

export const Paragraph: Typography = (props) => {
  const { ellipsis, children, className, ...others } = props

  return (
    <Box
      fontSize={16}
      component="p"
      fontWeight={400}
      className={clsx({ [className || '']: true })}
      {...{
        ...(ellipsis ? createEllipsisStyle() : {}),
        ...others,
      }}
    >
      {children}
    </Box>
  )
}

export const Small: Typography = (props) => {
  const { ellipsis, children, className, ...others } = props

  return (
    <Box
      fontSize={13}
      component="small"
      fontWeight={500}
      lineHeight={1.6}
      className={clsx({ [className || '']: true })}
      {...{
        ...(ellipsis ? createEllipsisStyle() : {}),
        ...others,
      }}
    >
      {children}
    </Box>
  )
}

export const Span: Typography = (props) => {
  const { ellipsis, children, className, ...others } = props

  return (
    <Box
      fontSize={14}
      component="span"
      className={clsx({ [className || '']: true })}
      {...{
        ...(ellipsis ? createEllipsisStyle() : {}),
        ...others,
      }}
    >
      {children}
    </Box>
  )
}

export const Tiny: Typography = (props) => {
  const { ellipsis, children, className, ...others } = props

  return (
    <Box
      component="p"
      fontSize={12}
      fontWeight={500}
      lineHeight={1.65}
      color="text.secondary"
      className={clsx({ [className || '']: true })}
      {...{
        ...(ellipsis ? createEllipsisStyle() : {}),
        ...others,
      }}
    >
      {children}
    </Box>
  )
}

export const TooltipSpan: Typography = (props) => {
  const { ellipsis, children, className, ...others } = props
  const theme = useTheme()
  return (
    <Box
      fontSize={14}
      component="span"
      fontWeight={400}
      color="text.secondary"
      className={clsx({ [className || '']: true })}
      {...{
        ...(ellipsis ? createEllipsisStyle() : {}),
        ...others,
      }}
      sx={{
        textDecoration: 'underline',
        textDecorationStyle: 'dotted',
        textDecorationColor: theme.palette.text.disabled,
        cursor: 'help',
      }}
    >
      {children}
    </Box>
  )
}
