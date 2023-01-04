import type { FC } from 'react'
import { useMemo } from 'react'
import { useTheme } from '@mui/material/styles'
import { useTranslation } from 'next-i18next'
import Grid from '@mui/material/Grid'
import type { TabsProps } from 'components/tabs'
import Tabs from 'components/tabs'

import Positions from './Positions'
import { H3 } from 'components/Typography'

const CallPoolDetails: FC = () => {
  const { t } = useTranslation('app-positions')
  const theme = useTheme()
  const tabs = useMemo(() => {
    const returnValue: TabsProps['tabs'] = [
      {
        title: 'ActivePositions',
        children: {
          component: Positions,
        },
      },
      {
        title: 'History',
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
    <>
      <H3>{t('title')}</H3>
      <H3>{t('subTitle')}</H3>
      <Grid container pt={2}>
        <Grid item xs={12}>
          <Tabs
            tabs={tabs}
            sx={{
              [theme.breakpoints.up('sm')]: {
                flex: 1,
                '.MuiTabs-scroller': {
                  justifyContent: 'center',
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
