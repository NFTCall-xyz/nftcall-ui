// import Stats from '../Stats'
import { Trans, useTranslation } from 'next-i18next'
import Image from 'next/image'

import ArrowForward from '@mui/icons-material/ArrowForward'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { H1, H3, Span } from 'components/Typography'

import ImageSrc from '../images/hero-pic.png'

const Hero: FC = () => {
  const { t } = useTranslation('home', { keyPrefix: 'hero' })
  return (
    <Stack component="section" spacing={4}>
      <Stack direction={{ xs: 'column', md: 'row' }}>
        <Stack spacing={4} paddingY={8} alignItems={{ xs: 'center', md: 'start' }} flex={1}>
          <Stack spacing={2}>
            <H1 fontSize={48} textAlign={{ xs: 'center', md: 'left' }}>
              <Trans
                i18nKey="title"
                t={t}
                components={{
                  NFTOptions: (
                    <Span color="primary.main" fontSize={48} fontWeight={600}>
                      {t('NFTOptions')}
                    </Span>
                  ),
                }}
              />
            </H1>
            <H3 color="text.secondary" fontWeight={400} textAlign={{ xs: 'center', md: 'left' }}>
              {t('subTitle')}
            </H3>
          </Stack>
          <Box>
            <Button variant="contained" size="large" endIcon={<ArrowForward />}>
              {t('tradeNow')}
            </Button>
          </Box>
        </Stack>
        <Box flex={1} position="relative" textAlign="center">
          <Image
            src={ImageSrc}
            alt={t('title')}
            style={{
              width: '70%',
              objectFit: 'contain',
            }}
          />
        </Box>
      </Stack>
      {/* <Stats /> */}
    </Stack>
  )
}

export default Hero
