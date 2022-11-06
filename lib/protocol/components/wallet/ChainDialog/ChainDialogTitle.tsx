import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { styled } from '@mui/material/styles'
import DialogTitle from '@mui/material/DialogTitle'
import { Typography } from '@mui/material'

import { H3, H5 } from 'components/Typography'

import { useWallet } from 'domains'

const ROOT = styled('div')`
  ${({ theme }) => ({
    margin: `${theme.spacing(2)} 0`,
  })}
`

const ChainDialogTitle: FC = () => {
  const { t } = useTranslation()
  const { network } = useWallet()

  return (
    <DialogTitle>
      <ROOT>
        <H3 textAlign="center">{t('wallet.chain.title')}</H3>
        <H5 textAlign="center">
          {t('wallet.chain.subTitle')}
          {network ? (
            <Typography key="wallet_chain_btn_text" component="span" color="primary">
              {network.fullName}
            </Typography>
          ) : (
            <Typography key="wallet_chain_btn_text" component="span" color="error">
              {t('wallet.chain.error')}
            </Typography>
          )}
        </H5>
      </ROOT>
    </DialogTitle>
  )
}

export default ChainDialogTitle
