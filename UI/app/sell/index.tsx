import Stack from '@mui/material/Stack'
import { H1, Paragraph } from 'components/Typography'
import { useTranslation } from 'next-i18next'
import type { TabsProps } from 'components/tabs'
import { useMemo } from 'react'
import Tabs from 'components/tabs'

import Stats from './Stats'
import WalletNFTs from './WalletNFTs'
import DepositedNFTs from './DepositedNFTs'
import Sold from './Sold'

const Sell: FC = () => {
  const { t } = useTranslation('app-sell')

  const tabs = useMemo(() => {
    const returnValue: TabsProps['tabs'] = [
      {
        title: 'walletNFTs',
        children: {
          component: WalletNFTs,
        },
      },
      {
        title: 'depositedNFTs',
        children: {
          component: DepositedNFTs,
        },
      },
      {
        title: 'sold',
        children: {
          component: Sold,
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
        <H1>{t('title')}</H1>
        <Paragraph color='text.secondary'>{t('subTitle')}</Paragraph>
      </Stack>
      <Stats />
      <Tabs tabs={tabs} />
    </Stack>
  )
}

export default Sell
