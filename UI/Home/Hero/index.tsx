import { Trans, useTranslation } from 'next-i18next'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { H1, H3, Span } from 'components/Typography'
import Image from 'next/image'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Stats from '../Stats'
import ImageSrc from '../images/hero-pic.png'
import { styled } from '@mui/material/styles'

const BgGradient1 = styled(Box)`
  position: absolute;
  width: 35%;
  height: 35%;
  top: 5rem;
  left: 15rem;
  background: linear-gradient(90deg, #f4c4f3 0%, #fc67fa 100%);
  filter: blur(900px);
`

const BgGradient2 = styled(Box)`
  position: absolute;
  width: 60%;
  height: 80%;
  left: 10rem;
  bottom: 5rem;
  background: rgba(255, 255, 255, 0.2);
  filter: blur(750px);
  border-radius: 9999px;
`

const BgGradient3 = styled(Box)`
  position: absolute;
  width: 50%;
  height: 50%;
  right: 5rem;
  bottom: 5rem;
  background: linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%);
  filter: blur(123px);
`

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
          <BgGradient1 />
          <BgGradient2 />
          <BgGradient3 />
        </Box>
      </Stack>
      <Stats />
    </Stack>
  )
}

export default Hero
