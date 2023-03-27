import type { FC } from 'react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import ChainErrorIcon from '@mui/icons-material/PowerOffTwoTone'
import type { Theme } from '@mui/material'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import ChainIcon from '../ChainIcon'
import { useChainButton } from './useChainButton'

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
            border: `1px solid ${theme.palette.error.main}`,
            '&:hover': {
              border: `1px solid ${theme.palette.error.main}`,
              color: theme.palette.error.light,
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
          border: `1px solid ${theme.palette.divider}`,
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
            border: `1px solid ${theme.palette.primary.main}`,
            color: theme.palette.text.primary,
          },
          color: theme.palette.text.secondary,
        }}
      >
        {network.name}
      </Button>
    )
  }, [network, open, t, theme.palette, downSm])

  return content || null
}

export default ChainButton
