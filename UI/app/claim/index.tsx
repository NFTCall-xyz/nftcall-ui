import Stack from '@mui/material/Stack'
import { H1, Paragraph } from 'components/Typography'
import { useTranslation } from 'next-i18next'

import Claims from './Claims'

const Claim: FC = () => {
  const { t } = useTranslation('app-claim')
  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <H1>{t('title')}</H1>
        <Paragraph color="text.secondary">{t('subTitle')}</Paragraph>
      </Stack>
      <Claims />
    </Stack>
  )
}

export default Claim
