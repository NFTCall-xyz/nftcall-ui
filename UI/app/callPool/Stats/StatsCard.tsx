import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Stack } from '@mui/material'

import { H2, Paragraph } from 'components/Typography'

// root component interface
interface StatsCardProps {
  card: any
}

const StatsCard: FC<React.PropsWithChildren<StatsCardProps>> = ({ card }) => {
  const { title, price } = card
  const { t } = useTranslation('app-callpool')

  return (
    <Stack spacing={1} justifyContent="center" alignItems="center">
      <Paragraph whiteSpace="nowrap" color="text.secondary">
        {t(title)}
      </Paragraph>
      <H2>{price}</H2>
    </Stack>
  )
}

export default StatsCard
