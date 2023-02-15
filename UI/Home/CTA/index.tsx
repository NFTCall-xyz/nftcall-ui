import { useTranslation } from 'next-i18next'

import ArrowForward from '@mui/icons-material/ArrowForward'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'

import { H3, Paragraph } from 'components/Typography'

const CTA: FC = () => {
  const { t } = useTranslation('home', { keyPrefix: 'cta' })
  const theme = useTheme()

  return (
    <Stack
      component="section"
      direction={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      paddingX={{ xs: 2, sm: 8 }}
      paddingY={6}
      sx={{
        background: theme.palette.background.paper,
        borderRadius: '20px',
      }}
    >
      <Stack spacing={2}>
        <H3 fontSize={36} textAlign={{ xs: 'center', md: 'left' }}>
          {t('title')}
        </H3>
        <Paragraph color="text.secondary" fontWeight={400} textAlign={{ xs: 'center', md: 'left' }}>
          {t('subTitle')}
        </Paragraph>
      </Stack>
      <Box>
        <Button variant="contained" size="large" endIcon={<ArrowForward />} href="/app">
          {t('tradeNow')}
        </Button>
      </Box>
    </Stack>
  )
}

export default CTA
