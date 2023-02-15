import { useTranslation } from 'next-i18next'
import React from 'react'

import ArrowForward from '@mui/icons-material/ArrowForward'
// import MoneyOffRounded from '@mui/icons-material/MoneyOffRounded'
import MultipleStopIcon from '@mui/icons-material/MultipleStop'
import StarRounded from '@mui/icons-material/StarRounded'
import TimelapseIcon from '@mui/icons-material/Timelapse'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'

import { H2, H3, Paragraph } from 'components/Typography'

type FeatureCardProps = {
  icon: React.ReactNode
  title: string
  content: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, content }) => {
  const theme = useTheme()
  return (
    <Stack
      direction="row"
      padding={2}
      spacing={2}
      alignItems="center"
      sx={{
        '&:hover': {
          background: theme.palette.background.paper,
        },
        borderRadius: '20px',
      }}
    >
      <IconButton
        color="primary"
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: '2.5rem',
          },
          cursor: 'default',
        }}
      >
        {icon}
      </IconButton>
      <Stack spacing={1}>
        <H3>{title}</H3>
        <Paragraph color="text.secondary">{content}</Paragraph>
      </Stack>
    </Stack>
  )
}

const featureIcons = [
  { icon: <StarRounded /> },
  { icon: <MultipleStopIcon /> },
  // { icon: <MoneyOffRounded /> },
  { icon: <TimelapseIcon /> },
]

const Benefits: FC = () => {
  const { t } = useTranslation('home', { keyPrefix: 'benefits' })
  return (
    <Stack component="section" direction={{ xs: 'column', md: 'row' }} spacing={8}>
      <Stack spacing={4} paddingY={2} alignItems={{ xs: 'center', md: 'start' }} flex={1}>
        <Stack spacing={2}>
          <H2 fontSize={36} textAlign={{ xs: 'center', md: 'left' }}>
            {t('title')}
          </H2>
          <Paragraph color="text.secondary" textAlign={{ xs: 'center', md: 'left' }}>
            {t('subTitle')}
          </Paragraph>
        </Stack>
        <Box>
          <Button variant="contained" endIcon={<ArrowForward />} href="/app">
            {t('tradeNow')}
          </Button>
        </Box>
      </Stack>
      <Stack flex={1} spacing={1}>
        {featureIcons.map(({ icon }, index) => (
          <FeatureCard key={index} icon={icon} title={t(`list.${index}.title`)} content={t(`list.${index}.subTitle`)} />
        ))}
      </Stack>
    </Stack>
  )
}

export default Benefits
