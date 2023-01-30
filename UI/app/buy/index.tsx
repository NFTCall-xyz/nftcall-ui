import { useTranslation } from 'next-i18next'

import Stack from '@mui/material/Stack'

import { H1, Paragraph } from 'components/Typography'

import { useAppBuy } from 'domains/pages/app'

import CallPools from './CallPools'
import Stats from './Stats'

const Buy: FC = () => {
  const { usePageEffect } = useAppBuy()
  usePageEffect()
  const { t } = useTranslation('app-buy')
  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <H1>{t('title')}</H1>
        <Paragraph color="text.secondary">{t('subTitle')}</Paragraph>
      </Stack>
      <Stats />
      <CallPools />
    </Stack>
  )
}

export default Buy
