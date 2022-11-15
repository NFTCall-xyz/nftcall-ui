import type { FC } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Button from '@mui/material/Button'

export const NFTAirdropButton: FC = () => {
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

export default NFTAirdropButton
