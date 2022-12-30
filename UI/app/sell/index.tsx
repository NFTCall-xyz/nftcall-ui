import Stack from '@mui/material/Stack'
import { H3, H5 } from 'components/Typography'
import { useTranslation } from 'next-i18next'
import type { TabsProps } from 'components/tabs'
import { useMemo } from 'react'
import Tabs from 'components/tabs'

import Stats from './Stats'
import WalletNFTs from './WalletNFTs'
import DepositedNFTs from './DepositedNFTs'

const Sell: FC = () => {
  const { t } = useTranslation('app-sell')

  const tabs = useMemo(() => {
    const returnValue: TabsProps['tabs'] = [
      {
        title: 'WalletNFTs',
        children: {
          component: WalletNFTs,
        },
      },
      {
        title: 'DepositedNFTs',
        children: {
          component: DepositedNFTs,
        },
      },
    ]
    return returnValue.map((i) => {
      i.title = t(`tabs.${i.title}`)
      return i
    })
  }, [t])

  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <H3>{t('title')}</H3>
        <H5>{t('subTitle')}</H5>
      </Stack>
      <Stats />
      <Tabs tabs={tabs} />
    </Stack>
  )
}

export default Sell
