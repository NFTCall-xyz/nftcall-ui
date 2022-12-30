import { Stack } from '@mui/material'
import { H3 } from 'components/Typography'
import type { CallPool } from 'domains/data/callPools'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { useRouter } from 'next/router'

// root component interface
interface CallPoolCardProps {
  callPool: CallPool
}

const CallPoolCard: FC<React.PropsWithChildren<CallPoolCardProps>> = ({ callPool }) => {
  const { t } = useTranslation('app-buy', { keyPrefix: 'callPools' })
  const { name, floorPrice, depositedItems, symbol, address } = callPool
  const router = useRouter()

  return (
    <Stack
      onClick={() => {
        router.push('/app/callPool/' + address.CallPools)
      }}
    >
      <H3>{name}</H3>
      <p>
        <span>{t('floorPrice')}</span>
        <NumberDisplay value={floorPrice} symbol={symbol} />
      </p>
      <p>
        <span>{t('depositedItems')}</span>
        <NumberDisplay value={depositedItems} />
      </p>
    </Stack>
  )
}

export default CallPoolCard
