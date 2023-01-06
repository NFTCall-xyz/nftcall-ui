import Stack from '@mui/material/Stack'
import { H3, H5 } from 'components/Typography'
import { useTranslation } from 'next-i18next'

import Stats from './Stats'
import CallPools from './CallPools'
import { useEffect } from 'react'

const Buy: FC = () => {
  const { t } = useTranslation('app-buy')
  useEffect(() => {
    const options = { method: 'GET' }
    fetch(
      // 'https://testnets-api.opensea.io/api/v1/asset_contract/0x445b465bA8E68C6f2d50C29DB5B629E40F6e9978',
      // 'https://api.opensea.io/api/v1/asset_contract/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D',
      'https://api.opensea.io/api/v1/asset_contract/0x60E4d786628Fea6478F785A6d7e704777c86a7c6',
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err))
  }, [])
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
