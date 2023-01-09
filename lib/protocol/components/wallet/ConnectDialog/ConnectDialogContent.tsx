import type { FC } from 'react'
import { useMemo } from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import DialogContent from '@mui/material/DialogContent'
import Link from '@mui/material/Link'

import RingLoading from 'components/loading/RingLoading'
import { H3, H5 } from 'components/Typography'
import { useWallet } from 'domains'

import MetamaskImg from './images/metamask.svg'
import WalletconnectImg from './images/wallet-connect.svg'
import Account from '../Account'

const ConnectDialogContent: FC = () => {
  const { status } = useWallet()
  const ROOT = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(3),
  }))
  const content = useMemo(() => {
    switch (status) {
      case 'connected':
        return <WalletConnected />
      case 'disconnected':
        return <WalletDisconnected />
      case 'error':
        return <WalletError />
      case 'connecting':
        return <WalletConnecting />
    }
  }, [status])

  return (
    <DialogContent>
      <ROOT>{content}</ROOT>
    </DialogContent>
  )
}

const WalletConnected: FC = () => {
  const { t } = useTranslation()
  const { reset } = useWallet()

  const ROOT = styled('div')``
  const AccountDiv = styled(H3)(({ theme }) => ({
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    textAlign: 'center',
  }))
  const DisconnectBtn = styled(Button)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    width: theme.spacing(26),
  }))
  return (
    <ROOT>
      <AccountDiv>
        <Account />
      </AccountDiv>
      <DisconnectBtn variant="outlined" onClick={reset}>
        {t('wallet.btn.disconnected')}
      </DisconnectBtn>
    </ROOT>
  )
}

const WalletDisconnected: FC = () => {
  const {
    connect,
    connectDialog: { close },
  } = useWallet()

  const ConnectWallet = styled(Button)(({ theme }) => ({
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    justifyContent: 'flex-start',
    width: '100%',
    border: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing(3)} ${theme.spacing(4)}`,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  }))
  const ROOT = styled('div')`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `
  const ConnectWalletName = styled('span')`
    font-size: 1.1rem;
    margin-left: 16px;
  `
  return (
    <ROOT>
      <ConnectWallet
        color="inherit"
        onClick={async () => {
          await connect()
          close()
        }}
      >
        <Image src={MetamaskImg} alt="metamask" />
        <ConnectWalletName>Metamask</ConnectWalletName>
      </ConnectWallet>
      <ConnectWallet
        color="inherit"
        onClick={async () => {
          await connect('walletconnect')
          close()
        }}
      >
        <Image src={WalletconnectImg} alt="walletconnect" />
        <ConnectWalletName>WalletConnect</ConnectWalletName>
      </ConnectWallet>
    </ROOT>
  )
}

const WalletError: FC = () => {
  return <WalletDisconnected />
}

const WalletConnecting: FC = () => {
  const { t } = useTranslation()
  const ROOT = styled('div')`
    text-align: center;
  `
  const Loading = styled('div')(({ theme }) => ({
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(8),
  }))
  return (
    <ROOT>
      <Loading>
        <RingLoading />
      </Loading>
      <H5>
        <span>{t('wallet.tips.accept')}</span>
        <Link href="#">{t('wallet.tips.term')}</Link>
      </H5>
    </ROOT>
  )
}

export default ConnectDialogContent
