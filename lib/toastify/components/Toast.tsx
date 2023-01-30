import cx from 'clsx'
import { useMemo } from 'react'

import { useTheme } from '@mui/material'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'

import { useToast } from '../hooks'
import type { ToastProps } from '../types'
import { CloseButton } from './CloseButton'
import { Icons } from './Icons'
import { ProgressBar } from './ProgressBar'

export const Toast: React.FC<ToastProps> = (props) => {
  const { isRunning, preventExitTransition, toastRef, eventHandlers } = useToast(props)
  const {
    closeButton,
    children,
    autoClose,
    onClick,
    type,
    hideProgressBar,
    closeToast,
    transition: Transition,
    position,
    updateId,
    role,
    progress,
    toastId,
    deleteToast,
    isIn,
    isLoading,
  } = props
  const cssClasses = cx(`Toastify__toast`, `Toastify__toast--${type}`)
  const isProgressControlled = !!progress
  const Icon = useMemo(() => {
    const maybeIcon = Icons[type as keyof typeof Icons]
    const iconProps = { type }
    if (isLoading) {
      return Icons.spinner(iconProps)
    } else {
      return maybeIcon && maybeIcon(iconProps)
    }
  }, [isLoading, type])
  const theme = useTheme()

  return (
    <Transition
      isIn={isIn}
      done={deleteToast}
      position={position}
      preventExitTransition={preventExitTransition}
      nodeRef={toastRef}
    >
      <Card
        id={toastId as string}
        onClick={onClick}
        className={cssClasses}
        {...eventHandlers}
        ref={toastRef}
        sx={{ width: 320, border: 'solid 1px', borderColor: theme.palette.divider }}
        role={role}
      >
        <CardHeader
          sx={{ width: '100%' }}
          avatar={Icon}
          action={closeButton !== false && <CloseButton closeToast={closeToast} type={type} />}
          title={children as any}
        />

        {(autoClose || isProgressControlled) && (
          <ProgressBar
            {...(updateId && !isProgressControlled ? { key: `pb-${updateId}` } : {})}
            delay={autoClose as number}
            isRunning={isRunning}
            isIn={isIn}
            closeToast={closeToast}
            hide={hideProgressBar}
            type={type}
            controlledProgress={isProgressControlled}
            progress={progress}
          />
        )}
      </Card>
    </Transition>
  )
}
