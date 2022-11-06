import type { FC } from 'react'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material/styles'

import Button from '@mui/material/Button'
import ArrowBack from '@mui/icons-material/ArrowBack'

const BackButton: FC = () => {
  const router = useRouter()
  const theme = useTheme()
  return (
    <Button
      sx={{ color: theme.palette.text.secondary }}
      variant="white"
      startIcon={<ArrowBack />}
      onClick={() => router.back()}
    >
      Back
    </Button>
  )
}

export default BackButton
