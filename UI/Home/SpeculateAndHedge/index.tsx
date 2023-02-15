import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import React from 'react'

import ArrowForward from '@mui/icons-material/ArrowForward'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { H2, H3, Paragraph } from 'components/Typography'

import ImageSrc from '../images/speculate.png'

const SpeculateAndHedge: FC = () => {
  const { t } = useTranslation('home', { keyPrefix: 'speculateAndHedge' })
  return (
    <Stack component="section" direction={{ xs: 'column', md: 'row' }} spacing={8}>
      <Stack spacing={4} paddingY={2} alignItems={{ xs: 'center', md: 'start' }} flex={1}>
        <H3 color="primary.main">{t('for')}</H3>
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
      <Box flex={1}>
        <Image src={ImageSrc} alt={t('title')} style={{ width: '100%', height: '100%' }} />
      </Box>
    </Stack>
  )
}

export default SpeculateAndHedge
