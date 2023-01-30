import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import type { FC } from 'react'

import Button from '@mui/material/Button'

export const LanuchApp: FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <Button
      key="lanuch-app-button"
      variant="contained"
      onClick={() => {
        router.push({
          pathname: '/app',
        })
      }}
    >
      {t('router:launchApp')}
    </Button>
  )
}

export default LanuchApp
