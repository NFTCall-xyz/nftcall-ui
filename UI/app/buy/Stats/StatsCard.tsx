import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Stack, useTheme } from '@mui/material'

import { H2, Span } from 'components/Typography'

// root component interface
interface StatsCardProps {
  card: any
}

const StatsCard: FC<React.PropsWithChildren<StatsCardProps>> = ({ card }) => {
  const { title, price } = card
  const { t } = useTranslation('app-buy', { keyPrefix: 'stats' })
  const theme = useTheme()

  return (
    <Stack spacing={1} paddingY={2} paddingX={3} sx={{ border: `solid 1px ${theme.palette.divider}`, borderRadius: 2 }}>
      <Span color="text.secondary">{t(title)}</Span>
      <H2>{price}</H2>
    </Stack>
  )
}

export default StatsCard
