import Stack from '@mui/material/Stack'
import { H3, H5 } from 'components/Typography'
import { useTranslation } from 'next-i18next'

import Stats from './Stats'
import CallPools from './CallPools'
import { useNetwork } from 'domains/data'

const Buy: FC = () => {
  const { t } = useTranslation('app-buy')
  const {} = useNetwork()
  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <H3>{t('title')}</H3>
        <H5>{t('subTitle')}</H5>
      </Stack>
      <Stats />
      <CallPools />
    </Stack>
  )
}

export default Buy
