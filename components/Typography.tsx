import clsx from 'clsx'
import React from 'react'

import type { BoxProps } from '@mui/material'
import { Box } from '@mui/material'

const createEllipsisStyle = () =>
  ({
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  } as any)

type Props = { ellipsis?: boolean }

export const H1: React.FC<BoxProps & Props> = (props) => {
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

export const H2: React.FC<BoxProps & Props> = (props) => {
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

export const H3: React.FC<BoxProps & Props> = (props) => {
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

export const H4: React.FC<BoxProps & Props> = (props) => {
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

export const H5: React.FC<BoxProps & Props> = (props) => {
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

export const H6: React.FC<BoxProps & Props> = (props) => {
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

export const Paragraph: React.FC<BoxProps & Props> = (props) => {
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

export const Small: React.FC<BoxProps & Props> = (props) => {
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

export const Span: React.FC<BoxProps & Props> = (props) => {
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

export const Tiny: React.FC<BoxProps & Props> = (props) => {
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
