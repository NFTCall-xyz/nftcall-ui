import { groupBy } from 'lodash'
import { useTranslation } from 'next-i18next'
import { Fragment, useMemo } from 'react'

import { useMediaQuery, useTheme } from '@mui/material'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import Dialog from 'components/dialog/Dialog'

import { useCallPools } from 'domains/data'

import CallPools from './CallPools'

type NFTSettingBatchDialogProps = {}
const NFTSettingBatchDialog: FC<NFTSettingBatchDialogProps> = () => {
  const { t } = useTranslation('domains', { keyPrefix: 'callPools.settingBatchDialog' })
  const {
    dialogs: { nftBatchSetting },
  } = useCallPools()
  const { close, nfts, update } = nftBatchSetting

  const callPools = useMemo(() => {
    if (!nfts || !nfts.length) return []
    const returnValue = Object.values(groupBy(nfts, 'nftAddress'))
    return returnValue
  }, [nfts])

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Dialog
      {...{ ...nftBatchSetting, title: t('title') }}
      fullScreen={!matches}
      fullWidth
      actions={
        <Fragment>
          <Button variant="outlined" onClick={close}>
            {t('cancel')}
          </Button>
        </Fragment>
      }
    >
      <Grid container spacing={2} marginTop={2}>
        {callPools.map((nfts, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <CallPools key={index} nfts={nfts} update={update} />
          </Grid>
        ))}
      </Grid>
    </Dialog>
  )
}

export default NFTSettingBatchDialog
