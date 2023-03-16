import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Box, Stack, Tooltip, useTheme } from '@mui/material'

import { H2, TooltipSpan } from 'components/Typography'

// root component interface
interface StatsCardProps {
  card: any
}

const StatsCard: FC<React.PropsWithChildren<StatsCardProps>> = ({ card }) => {
  const { title, price, tip } = card
  const { t } = useTranslation('app-sell', { keyPrefix: 'stats' })
  const theme = useTheme()

  return (
    <Stack spacing={1} paddingY={2} paddingX={3} sx={{ border: `solid 1px ${theme.palette.divider}`, borderRadius: 2 }}>
      <Tooltip title={t(tip)}>
        <Box>
          <TooltipSpan>{t(title)}</TooltipSpan>
        </Box>
      </Tooltip>
      <H2>{price}</H2>
    </Stack>
  )
}

export default StatsCard
