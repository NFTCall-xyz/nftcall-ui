import { useTranslation } from 'next-i18next'
import { useEffect } from 'react'
import { useImmer } from 'use-immer'

import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout'
import { Box, Fab, Grid, Stack, Zoom } from '@mui/material'
import { green } from '@mui/material/colors'

import { useDialog } from 'app/hooks/useDialog'
import type { UseIds } from 'app/hooks/useIds'

import { LoadMoreButton } from 'components/btn/LoadMoreButton'
import Dialog from 'components/dialog/Dialog'

import type { ListedNFT } from './NFTCard'
import NFTCard from './NFTCard'
import OpenCallOptionsContent from './OpenCallOptions/Content'
import type { UseListedNFTs } from './useListedNFTs'

type Props = {
  listedNFTs: UseListedNFTs
  nfts: ListedNFT[]
  ids: UseIds
}
const ListedNFTs: FC<Props> = ({ listedNFTs: { data, onLoadMore, noMoreData, disabled, restart }, nfts, ids }) => {
  const dialog = useDialog()
  const [hasId, setHasId] = useImmer(false)
  const { t } = useTranslation('app-callpool')
  useEffect(() => {
    setHasId(!!ids.size)
  }, [ids.size, setHasId])

  return (
    <Stack spacing={2}>
      <Grid container spacing={2}>
        {nfts.map((nft) => (
          <Grid item xs={6} key={nft.nftAddress + nft.tokenId}>
            <NFTCard {...{ ...nft, ids }} />
          </Grid>
        ))}
      </Grid>
      <LoadMoreButton
        {...{
          onLoadMore,
          end: noMoreData,
          disabled,
        }}
      />
      <Zoom in={hasId} unmountOnExit>
        <Fab
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            color: 'common.white',
            bgcolor: green[500],
            '&:hover': {
              bgcolor: green[600],
            },
          }}
          size="large"
          color="primary"
          onClick={() => {
            dialog.open()
          }}
        >
          <ShoppingCartCheckoutIcon />
        </Fab>
      </Zoom>
      <Dialog {...{ ...dialog, title: t('openPanel.openCall') }} fullScreen>
        <Box minWidth={300}>
          <OpenCallOptionsContent
            {...{
              request: () => {
                restart()
                ids.clear()
              },
              nfts: data,
              ids,
            }}
          />
        </Box>
      </Dialog>
    </Stack>
  )
}

export default ListedNFTs
