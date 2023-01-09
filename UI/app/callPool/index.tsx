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
import { H3, H5 } from 'components/Typography'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

const CallPoolDetails: FC = () => {
  const { t } = useTranslation('app-callpool')
  const theme = useTheme()
  const tabs = useMemo(() => {
    const returnValue: TabsProps['tabs'] = [
      {
        title: 'ListedNFTs',
        children: {
          component: ListedNFTs,
        },
      },
      {
        title: 'History',
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
    collection: { name },
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
            <H3>{name}</H3>
            <Stack spacing={2} direction="row">
              <Stack spacing={1}>
                <H5>{t('floorPrice')}</H5>
                <Stack spacing={1} direction="row">
                  <TokenIcon symbol={symbol} sx={{ width: 24, height: 24 }} />
                  <NumberDisplay value={price} />
                </Stack>
              </Stack>
              <Stack spacing={1}>
                <H5>{t('depositedItems')}</H5>
                <NumberDisplay value={totalDepositedNFTs} />
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
