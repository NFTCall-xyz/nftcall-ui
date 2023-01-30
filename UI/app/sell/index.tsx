import { useTranslation } from 'next-i18next'
import { useMemo } from 'react'

import Stack from '@mui/material/Stack'

import { H1, Paragraph } from 'components/Typography'
import type { TabsProps } from 'components/tabs'
import Tabs from 'components/tabs'

import DepositedNFTs from './DepositedNFTs'
import Positions from './Positions'
import Sold from './Sold'
import Stats from './Stats'
import WalletNFTs from './WalletNFTs'

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
      {
        title: 'positions',
        children: {
          component: Positions,
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
        <Paragraph color="text.secondary">{t('subTitle')}</Paragraph>
      </Stack>
      <Stats />
      <Tabs tabs={tabs} />
    </Stack>
  )
}

export default Sell
