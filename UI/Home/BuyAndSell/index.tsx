import React from 'react'
import { useTranslation } from 'next-i18next'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { H2, Paragraph } from 'components/Typography'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Image from 'next/image'
import ImageSrc from '../images/buy-and-sell.png'
import { styled } from '@mui/material/styles'

const BgGradient1 = styled(Box)`
  position: absolute;
  width: 50%;
  height: 50%;
  top: 0;
  left: -50%;
  background: rgba(222, 221, 221, 0.6);
  filter: blur(750px);
  z-index: 3;
`

const BgGradient2 = styled(Box)`
  position: absolute;
  width: 50%;
  height: 50%;
  left: -50%;
  bottom: 0;
  background: linear-gradient(90deg, #f4c4f3 0%, #fc67fa 100%);
  filter: blur(900px);
  border-radius: 9999px;
`

const BuyAndSell: FC = () => {
  const { t } = useTranslation('home', { keyPrefix: 'buyAndSell' })
  return (
    <Stack component='section' direction={{ xs: 'column-reverse', md: 'row' }} spacing={8}>
      <Box flex={1} position='relative'>
        <Image src={ImageSrc} alt={t('title')} style={{ width: '100%', height: '100%', zIndex: 5 }} />
        <BgGradient1 />
        <BgGradient2 />
      </Box>
      <Stack spacing={4} paddingY={2} alignItems={{ xs: 'center', md: 'start' }} flex={1}>
        <Stack spacing={2}>
          <H2 fontSize={36} textAlign={{ xs: 'center', md: 'left' }}>
            {t('title')}
          </H2>
          <Paragraph color='text.secondary' textAlign={{ xs: 'center', md: 'left' }}>{t('subTitle')}</Paragraph>
        </Stack>
        <Box>
          <Button 
            variant='contained' 
            endIcon={<ArrowForward />}
          >
            {t('tradeNow')}
          </Button>
        </Box>
      </Stack>
    </Stack>
  )
}

export default BuyAndSell
