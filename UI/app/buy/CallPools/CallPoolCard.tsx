import Stack from '@mui/material/Stack'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import CardMedia from '@mui/material/CardMedia'
import { H3, Tiny } from 'components/Typography'
import type { CallPool } from 'domains/data/callPools'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import { useRouter } from 'next/router'
import TokenIcon from 'lib/protocol/components/TokenIcon'
import FlexBetween from 'components/flexbox/FlexBetween'
import { useTheme } from '@mui/material'

// root component interface
interface CallPoolCardProps {
  callPool: CallPool
}

const CallPoolCard: FC<React.PropsWithChildren<CallPoolCardProps>> = ({ callPool }) => {
  const { t } = useTranslation('app-buy', { keyPrefix: 'callPools' })
  const {
    nftOracle: { price: floorPrice },
    collection: { name, bannerImageUrl, imageUrl },
    info: { symbol },
    stats: { totalDepositedNFTs },
    address,
  } = callPool
  const router = useRouter()
  const theme = useTheme()

  return (
    <Card
      onClick={() => {
        router.push('/app/callPool/' + address.CallPool)
      }}
      sx={{ 
        cursor: 'pointer', 
        border: `solid 1px ${theme.palette.divider}`,
        '&:hover': {
          borderColor: theme.palette.primary.main,
          backgroundColor: 'primary.200',
        }
      }}
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
              <Tiny>{t('floorPrice')}</Tiny>
              <Stack spacing={1} direction="row" alignItems='center'>
                <TokenIcon symbol={symbol} sx={{ width: 16, height: 16 }} />
                <NumberDisplay value={floorPrice} />
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <Tiny>{t('depositedItems')}</Tiny>
              <NumberDisplay value={totalDepositedNFTs} />
            </Stack>
          </FlexBetween>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default CallPoolCard
