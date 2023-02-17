import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, useTheme } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'

import { H3 } from 'components/Typography'

import type { CallPool } from 'domains/data/callPools'

// root component interface
interface NFTCollectionCardProps {
  callPool: CallPool
}

const NFTCollectionCard: FC<React.PropsWithChildren<NFTCollectionCardProps>> = ({ callPool }) => {
  const { t } = useTranslation('app-faucets-nft', { keyPrefix: 'nftCollections' })
  const {
    collection: { name, bannerImageUrl, imageUrl },
  } = callPool
  const theme = useTheme()

  return (
    <Card
      sx={{
        border: `solid 1px ${theme.palette.divider}`,
        '&:hover': {
          borderColor: theme.palette.primary.main,
          backgroundColor: 'primary.200',
        },
      }}
    >
      <CardMedia sx={{ height: 140 }} image={bannerImageUrl} title={name} />
      <Avatar alt={name} src={imageUrl} sx={{ marginTop: '-35px', marginLeft: 2, width: 70, height: 70, border: '' }}>
        {name}
      </Avatar>
      <CardContent>
        <Stack spacing={2}>
          <H3>{name}</H3>
          <Button variant="contained">{t('mint')}</Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default NFTCollectionCard
