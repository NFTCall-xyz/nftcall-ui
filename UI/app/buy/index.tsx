import Stack from '@mui/material/Stack'
import { H1, Paragraph } from 'components/Typography'
import { useTranslation } from 'next-i18next'

import Stats from './Stats'
import CallPools from './CallPools'

const Buy: FC = () => {
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
