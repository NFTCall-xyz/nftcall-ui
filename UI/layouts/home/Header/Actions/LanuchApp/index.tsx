import type { FC } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import Button from '@mui/material/Button'
import Icon from '@mui/icons-material/CelebrationTwoTone'

export const NFTAirdropButton: FC = () => {
  const { t } = useTranslation()
  const router = useRouter()
  return (
    <Button
      key="lanuch-app-button"
      variant="contained"
      startIcon={<Icon />}
      onClick={() => {
        router.push({
          pathname: '/app',
        })
      }}
    >
      {t('router:menu.app')}
    </Button>
  )
}

export default NFTAirdropButton
