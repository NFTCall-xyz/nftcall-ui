import type { FC } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'
import { useTranslation } from 'next-i18next'

import Button from '@mui/material/Button'
import ArrowBack from '@mui/icons-material/ArrowBack'

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
