import type { FC } from 'react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'

import { WalletStatus } from 'lib/wallet/constant'

import Account from '../Account'
import { useConnectButton } from './useConnectButton'

export const ConnectButton: FC = () => {
  const { status } = useConnectButton()

  const content = useMemo(() => {
    switch (status) {
      case WalletStatus.connected:
        return <WalletConnected />
      case WalletStatus.disconnected:
        return <WalletDisconnected />
      case WalletStatus.connecting:
        return <WalletConnecting />
    }
  }, [status])

  return content || null
}

const WalletConnected: FC = () => {
  const { open } = useConnectButton()
  const theme = useTheme()
  return (
    <Button
      key="wallet-btn"
      onClick={open}
      variant="outlined"
      sx={{
        border: `1px solid ${theme.palette.divider}`,
        '&:hover': { backgroundColor: theme.palette.action.hover },
        color: theme.palette.text.secondary,
      }}
    >
      <Account onlyENSName />
    </Button>
  )
}

const WalletDisconnected: FC = () => {
  const { t } = useTranslation()
  const { open } = useConnectButton()
  return (
    <Button key="wallet-btn" variant="contained" onClick={open}>
      {t('wallet.disconnected.title')}
    </Button>
  )
}

const WalletConnecting: FC = () => {
  const { t } = useTranslation()
  const { open } = useConnectButton()
  return (
    <Button key="wallet-btn" variant="contained" onClick={open} sx={{ borderRadius: 30 }}>
      {t('wallet.connecting.title')}
    </Button>
  )
}

export default ConnectButton
