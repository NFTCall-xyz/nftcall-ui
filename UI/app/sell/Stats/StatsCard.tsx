import { Stack } from '@mui/material'
import { H3, Tiny } from 'components/Typography'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

// root component interface
interface StatsCardProps {
  card: any
}

const StatsCard: FC<React.PropsWithChildren<StatsCardProps>> = ({ card }) => {
  const { title, price } = card
  const { t } = useTranslation('app-sell', { keyPrefix: 'stats' })

  return (
    <Stack>
      <H3>{price}</H3>
      <Tiny color="text.secondary">{t(title)}</Tiny>
    </Stack>
  )
}

export default StatsCard
