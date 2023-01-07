import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import { H3, H5 } from 'components/Typography'
import type { CallPool } from 'domains/data/callPools'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { useRouter } from 'next/router'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import FlexBetween from 'components/flexbox/FlexBetween'

// root component interface
interface CallPoolCardProps {
  callPool: CallPool
}

const CallPoolCard: FC<React.PropsWithChildren<CallPoolCardProps>> = ({ callPool }) => {
  const { t } = useTranslation('app-buy', { keyPrefix: 'callPools' })
  const {
    oracle: { price: floorPrice },
    collection: { name, bannerImageUrl, imageUrl },
    info: { symbol },
    address,
  } = callPool
  const router = useRouter()

  return (
    <Card
      onClick={() => {
        router.push('/app/callPool/' + address.CallPool)
      }}
      sx={{ cursor: 'pointer' }}
    >
      <CardMedia sx={{ height: 140 }} image={bannerImageUrl} title={name} />
      <Avatar alt={name} src={imageUrl} sx={{ marginTop: '-35px', marginLeft: 2, width: 70, height: 70, border: '' }}>
        {name}
      </Avatar>
      <CardContent>
        <Stack spacing={2}>
          <H3>{name}</H3>
          <FlexBetween>
            <Stack spacing={1}>
              <span>{t('floorPrice')}</span>
              <Stack spacing={1} direction="row">
                <TokenIcon symbol={symbol} sx={{ width: 24, height: 24 }} />
                <NumberDisplay value={floorPrice} />
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <span>{t('depositedItems')}</span>
              <NumberDisplay value={0} />
            </Stack>
          </FlexBetween>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default CallPoolCard
