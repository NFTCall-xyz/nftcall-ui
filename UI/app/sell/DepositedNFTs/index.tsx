import { useTranslation } from 'next-i18next'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'

import { useIds } from 'app/hooks/useIds'

import { LoadMoreButton } from 'components/btn/LoadMoreButton'

import { useCallPools } from 'domains/data'
import { useUpdateNFTAssets } from 'domains/data/nft/hooks/useUpdateNFTAssets'
import { getNFTId } from 'domains/data/nft/utils/id'

import NFTCard from './NFTCard'
import { useDepositedNFTs } from './useDepositedNFTs'

const DepositedNFTs = () => {
  const ids = useIds()
  const { t } = useTranslation('app-sell')
  const { data, onLoadMore, noMoreData, disabled, restart } = useDepositedNFTs()
  useUpdateNFTAssets(data)
  const {
    dialogs: { nftBatchSetting },
  } = useCallPools()

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Stack spacing={2} direction="row-reverse">
          <Button
            variant="outlined"
            disabled={!ids.size}
            onClick={() => {
              nftBatchSetting.open(
                ids.values.map((id) => data.find((nft) => getNFTId(nft) === id)).filter((i) => !!i),
                restart
              )
              ids.clear()
            }}
          >
            {t('tabs.settingSelected')}
          </Button>
          {!!ids.size && (
            <Button variant="outlined" onClick={() => ids.clear()}>
              {t('tabs.clearSelected')}
            </Button>
          )}
        </Stack>
      </Grid>
      {data.map((nft) => (
        <NFTCard {...{ ...nft, restart, ids }} key={nft.nftAddress + nft.tokenId} />
      ))}
      <Grid item xs={12}>
        <LoadMoreButton
          {...{
            onLoadMore,
            end: noMoreData,
            disabled,
          }}
        />
      </Grid>
    </Grid>
  )
}

export default DepositedNFTs
