import { useWallet } from 'domains'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import DialogTitle from '@mui/material/DialogTitle'
import { styled } from '@mui/material/styles'

import { H3, H5 } from 'components/Typography'

const ROOT = styled('div')`
  ${({ theme }) => ({
    margin: `${theme.spacing(2)} 0`,
  })}
`

const ConnectDialogTitle: FC = () => {
  const { t } = useTranslation()
  const { status } = useWallet()

  return (
    <DialogTitle>
      <ROOT>
        <H3 textAlign="center">{t(`wallet.${status}.title`)}</H3>
        <H5 textAlign="center">{t(`wallet.${status}.subTitle`)}</H5>
      </ROOT>
    </DialogTitle>
  )
}

export default ConnectDialogTitle
