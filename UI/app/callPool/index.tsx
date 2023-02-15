import { useTranslation } from 'next-i18next'
import Head from 'next/head'
import type { FC } from 'react'
import { useMemo } from 'react'

import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'

import { H2 } from 'components/Typography'
import BackButton from 'components/button/BackButton'
import type { TabsProps } from 'components/tabs'
import Tabs from 'components/tabs'

import { useCallPoolDetails } from 'domains/data'

import History from './History'
import ListedNFTs from './ListedNFTs'
import Stats from './Stats'

type TitleProps = {
  name?: string
}
const Title: FC<TitleProps> = ({ name }) => {
  const titleText = `NFTCall | ${name || 'CallPool'}`
  return (
    <Head>
      <title>{titleText}</title>
    </Head>
  )
}

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

  if (!callPool) return <Title />

  const {
    collection: { name, imageUrl },
  } = callPool
  return (
    <Stack spacing={2}>
      <Title name={name} />
      <Box>
        <BackButton />
      </Box>
      <Stack spacing={{ xs: 2, sm: 0 }} direction={{ xs: 'column', sm: 'row' }} justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <Avatar alt={name} src={imageUrl} sx={{ marginRight: 2, width: 60, height: 60, border: '' }}>
            {name}
          </Avatar>
          <H2>{name}</H2>
        </Stack>
        <Stats />
      </Stack>
      <Box>
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
      </Box>
    </Stack>
  )
}

export default CallPoolDetails
