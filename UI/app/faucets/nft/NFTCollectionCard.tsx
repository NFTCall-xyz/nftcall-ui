import { useWallet } from 'domains'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'

import { Button, useTheme } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Stack from '@mui/material/Stack'

import { H3 } from 'components/Typography'

import { transaction } from 'domains/controllers/adapter/transaction'
import { useNetwork } from 'domains/data'
import type { CallPool } from 'domains/data/callPools'

import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'

// root component interface
interface NFTCollectionCardProps {
  callPool: CallPool
}

const NFTCollectionCard: FC<React.PropsWithChildren<NFTCollectionCardProps>> = ({ callPool }) => {
  const { t } = useTranslation('app-faucets-nft', { keyPrefix: 'nftCollections' })
  const {
    collection: { name, bannerImageUrl, imageUrl },
    address: { NFT },
  } = callPool
  const theme = useTheme()

  const { networkAccount } = useWallet()
  const {
    contracts: { mockNFTService },
  } = useNetwork()

  const sendTransaction = useSendTransaction()

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
          <Button
            variant="contained"
            disabled={!networkAccount}
            onClick={() => {
              return transaction({
                createTransaction: mockNFTService.mint({
                  userAddress: networkAccount,
                  nftAddress: NFT,
                }),
                setStatus: () => {},
                sendTransaction,
                isOnlyApprove: false,
              })
            }}
          >
            {t('mint')}
          </Button>
        </Stack>
      </CardContent>
    </Card>
  )
}

export default NFTCollectionCard
