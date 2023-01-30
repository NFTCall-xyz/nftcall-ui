import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import type { FC } from 'react'

import ArrowBack from '@mui/icons-material/ArrowBack'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'

const BackButton: FC = () => {
  const router = useRouter()
  const theme = useTheme()
  const { t } = useTranslation('common')

  return (
    <Button
      sx={{ color: theme.palette.text.secondary }}
      variant="outlined"
      startIcon={<ArrowBack />}
      onClick={() => router.back()}
    >
      {t('btn.back')}
    </Button>
  )
}

export default BackButton
