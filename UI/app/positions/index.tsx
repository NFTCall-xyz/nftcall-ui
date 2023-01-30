import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { useMemo } from 'react'

import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'

import { H1, Paragraph } from 'components/Typography'
import type { TabsProps } from 'components/tabs'
import Tabs from 'components/tabs'

import Positions from './Positions'

const CallPoolDetails: FC = () => {
  const { t } = useTranslation('app-positions')
  const theme = useTheme()
  const tabs = useMemo(() => {
    const returnValue: TabsProps['tabs'] = [
      {
        title: 'activePositions',
        children: {
          component: Positions,
          props: {
            isActive: true,
          },
        },
      },
      {
        title: 'history',
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
      <Grid container pt={2}>
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
    </Stack>
  )
}

export default CallPoolDetails
