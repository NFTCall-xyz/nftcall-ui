import type { FC } from 'react'
import { useMemo } from 'react'
import { useTheme } from '@mui/material/styles'
import { useTranslation } from 'next-i18next'
import BackButton from 'components/button/BackButton'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import type { TabsProps } from 'components/tabs'
import Tabs from 'components/tabs'

import ListedNFTs from './ListedNFTs'
import History from './History'
import FlexBetween from 'components/flexbox/FlexBetween'
import { useCallPoolDetails } from 'domains/data'
import { H2, Paragraph } from 'components/Typography'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import Avatar from '@mui/material/Avatar'

const CallPoolDetails: FC = () => {
  const { t } = useTranslation('app-callpool')
  const theme = useTheme()
  const tabs = useMemo(() => {
    const returnValue: TabsProps['tabs'] = [
      {
        title: 'listedNFTs',
        children: {
          component: ListedNFTs,
        },
      },
      {
        title: 'history',
        children: {
          component: History,
        },
      },
    ]
    return returnValue.map((i) => {
      i.title = t(`tabs.${i.title}`)
      return i
    })
  }, [t])
  const { callPool } = useCallPoolDetails()

  if (!callPool) return null

  const {
    collection: { name, imageUrl },
    nftOracle: { price },
    info: { symbol },
    stats: { totalDepositedNFTs },
  } = callPool

  return (
    <>
      <BackButton />
      <Grid container pt={2}>
        <Grid item xs={12}>
          <FlexBetween>
            <Stack direction='row' alignItems='center'>
              <Avatar alt={name} src={imageUrl} sx={{ marginRight: 2, width: 60, height: 60, border: '' }}>
                {name}
              </Avatar>
              <H2>{name}</H2>
            </Stack>
            <Stack spacing={2} direction="row">
              <Stack spacing={1}>
                <Paragraph color='text.secondary'>{t('floorPrice')}</Paragraph>
                <Stack spacing={1} direction="row" alignItems='center'>
                  <TokenIcon symbol={symbol} sx={{ width: 24, height: 24 }} />
                  <H2><NumberDisplay value={price} /></H2>
                </Stack>
              </Stack>
              <Stack spacing={1}>
                <Paragraph color='text.secondary'>{t('depositedItems')}</Paragraph>
                <H2><NumberDisplay value={totalDepositedNFTs} /></H2>
              </Stack>
            </Stack>
          </FlexBetween>
        </Grid>
        <Grid item xs={12}>
          <Tabs
            tabs={tabs}
            sx={{
              [theme.breakpoints.up('sm')]: {
                flex: 1,
                '.MuiTabs-scroller': {
                  justifyContent: { xs: 'center', sm: 'start' },
                  alignItems: 'center',
                  display: 'flex',
                },
                '.MuiButtonBase-root': {
                  minWidth: 150,
                },
              },
            }}
          />
        </Grid>
      </Grid>
    </>
  )
}

export default CallPoolDetails
