import { useWallet } from 'domains'
import Image from 'next/image'
import type { FC } from 'react'
import { useCallback } from 'react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import Button from '@mui/material/Button'
import DialogContent from '@mui/material/DialogContent'
import Link from '@mui/material/Link'
import { styled } from '@mui/material/styles'

import { createToastifyPromise } from 'app/utils/promise/toastify'

import { H3, H5 } from 'components/Typography'
import RingLoading from 'components/loading/RingLoading'

import { toast } from 'lib/toastify'
import { coinbaseWallet } from 'lib/wallet/connectors/coinbaseWallet'
import { metaMask } from 'lib/wallet/connectors/metaMask'
import { walletConnectV2 } from 'lib/wallet/connectors/walletConnectV2'
import { WalletStatus } from 'lib/wallet/constant'

import Account from '../Account'
import CoinbaseImg from './images/coinbase.svg'
import MetamaskImg from './images/metamask.svg'
import WalletconnectImg from './images/wallet-connect.svg'

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
      case WalletStatus.connected:
        return <WalletConnected />
      case WalletStatus.disconnected:
        return <WalletDisconnected />
      case WalletStatus.connecting:
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
  const { connector } = useWallet()

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
      <DisconnectBtn variant="outlined" onClick={() => connector.resetState()}>
        {t('wallet.btn.disconnected')}
      </DisconnectBtn>
    </ROOT>
  )
}

const WalletDisconnected: FC = () => {
  const {
    chainId,
    dialogs: {
      connectDialog: { close },
    },
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
  const connect = useCallback(
    (connector: any) => {
      close()
      return createToastifyPromise(connector.activate(chainId), {
        position: toast.POSITION.TOP_LEFT,
        pendingContent: 'Connecting to Wallet...',
        resolveContent: 'Wallet Connected Successfully!',
        rejectedContent: 'Unable to Connect to Wallet',
      }).catch((e) => {
        console.error(e)
      })
    },
    [chainId, close]
  )

  return (
    <ROOT>
      <ConnectWallet color="inherit" onClick={() => connect(metaMask)}>
        <Image src={MetamaskImg} alt="metamask" />
        <ConnectWalletName>Metamask</ConnectWalletName>
      </ConnectWallet>
      <ConnectWallet color="inherit" onClick={() => connect(walletConnectV2)}>
        <Image src={WalletconnectImg} alt="walletconnect" />
        <ConnectWalletName>WalletConnect</ConnectWalletName>
      </ConnectWallet>
      <ConnectWallet color="inherit" onClick={() => connect(coinbaseWallet)}>
        <Image src={CoinbaseImg} alt="walletconnect" />
        <ConnectWalletName>Coinbase</ConnectWalletName>
      </ConnectWallet>
    </ROOT>
  )
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
