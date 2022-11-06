import type { FC } from 'react'
import type { Theme } from '@mui/material'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import Button from '@mui/material/Button'
import ChainErrorIcon from '@mui/icons-material/PowerOffTwoTone'
import ChainIcon from '../ChainIcon'

import { useChainButton } from './useChainButton'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

export const ChainButton: FC = () => {
  const { t } = useTranslation()
  const { network, open } = useChainButton()
  const theme = useTheme()
  const downSm = useMediaQuery((theme: Theme) => theme.breakpoints.down(600))

  const content = useMemo(() => {
    if (!network)
      return (
        <Button
          key="chain-btn"
          variant="outlined"
          color="error"
          startIcon={<ChainErrorIcon />}
          onClick={open}
          sx={{
            borderRadius: 30,
            border: `1px solid ${theme.palette.error.main}`,
            '&:hover': {
              backgroundColor: theme.palette.error.light,
              border: `1px solid ${theme.palette.error.main}`,
            },
            color: theme.palette.error.main,
          }}
        >
          {!downSm && t(`wallet.error.ChainUnknownError`)}
        </Button>
      )
    return (
      <Button
        key="chain-btn"
        variant="outlined"
        startIcon={<ChainIcon chainName={network.name} />}
        onClick={open}
        sx={{
          borderRadius: 30,
          border: `1px solid ${theme.palette.divider}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
            border: `1px solid ${theme.palette.divider}`,
          },
          color: theme.palette.text.secondary,
        }}
      >
        {network.fullName}
      </Button>
    )
  }, [
    network,
    open,
    t,
    theme.palette.action.hover,
    theme.palette.divider,
    theme.palette.error.light,
    theme.palette.error.main,
    theme.palette.text.secondary,
    downSm,
  ])

  return content || null
}

export default ChainButton
