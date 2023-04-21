import { useRouter } from 'next/router'
import type { FC } from 'react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import { useTheme } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'

import { H3, Tiny } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'

import type { CallPool } from 'domains/data/callPools'
import CollectionName from 'domains/data/nft/components/CollectionName'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import NFTList from './NFTList'

// root component interface
interface CallPoolCardProps {
  callPool: CallPool
}

const CallPoolCard: FC<React.PropsWithChildren<CallPoolCardProps>> = ({ callPool }) => {
  const { t } = useTranslation('app-buy', { keyPrefix: 'callPools' })
  const { t: tNFT } = useTranslation('domains', { keyPrefix: 'nft' })
  const {
    nftOracle: { price: floorPrice },
    collection: { name, bannerImageUrl, imageUrl },
    info: { symbol },
    stats: { totalTradingVolume, paused, deactivate },
    address,
  } = callPool
  const router = useRouter()
  const theme = useTheme()
  const poolStatus = useMemo(() => {
    if (paused) {
      return {
        status: tNFT('paused'),
        color: theme.palette.warning.main,
      }
    }
    if (deactivate) {
      return {
        status: tNFT('deactivated'),
        color: theme.palette.error.main,
      }
    }
  }, [deactivate, paused, tNFT, theme.palette])

  return (
    <Card
      onClick={() => {
        router.push('/app/callPool/' + address.CallPool)
      }}
      sx={{
        position: 'relative',
        cursor: 'pointer',
        border: `solid 1px ${theme.palette.divider}`,
        '&:hover': {
          borderColor: theme.palette.primary.main,
          backgroundColor: 'primary.200',
        },
      }}
    >
      {poolStatus && (
        <Box
          sx={{
            position: 'absolute',
            right: 10,
            top: 10,
            padding: '3px 7px',
            backgroundColor: poolStatus.color,
            borderRadius: '5px',
            boxShadow: theme.shadows[1],
          }}
        >
          <Tiny color="text.primary" fontSize={10} fontWeight="medium">
            {poolStatus.status}
          </Tiny>
        </Box>
      )}
      <CardMedia sx={{ height: 140 }} image={bannerImageUrl} title={name} />
      <Avatar alt={name} src={imageUrl} sx={{ marginTop: '-35px', marginLeft: 2, width: 70, height: 70, border: '' }}>
        {name}
      </Avatar>
      <CardContent>
        <Stack spacing={2}>
          <CollectionName component={H3} name={name} />
          <Stack spacing={1} direction="row">
            <NFTList callPool={callPool} />
          </Stack>
          <FlexBetween>
            <Stack spacing={1}>
              <Tiny>{t('floorPrice')}</Tiny>
              <Stack spacing={0.5} direction="row" alignItems="center">
                <TokenIcon symbol={symbol} sx={{ width: 16, height: 16 }} />
                <NumberDisplay value={floorPrice} />
              </Stack>
            </Stack>
            <Stack spacing={1}>
              <Tiny>{t('tradingVolume')}</Tiny>
              <Stack spacing={0.5} direction="row" alignItems="center">
                <TokenIcon symbol={symbol} sx={{ width: 16, height: 16 }} />
                <NumberDisplay value={totalTradingVolume} />
              </Stack>
            </Stack>
          </FlexBetween>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default CallPoolCard
