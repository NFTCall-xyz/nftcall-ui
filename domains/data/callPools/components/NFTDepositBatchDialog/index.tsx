import { groupBy } from 'lodash'
import { useTranslation } from 'next-i18next'
import { Fragment, useMemo } from 'react'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

import Dialog from 'components/dialog/Dialog'

import { useCallPools } from 'domains/data'

import CallPools from './CallPools'

type NFTDepositBatchDialogProps = {}
const NFTDepositBatchDialog: FC<NFTDepositBatchDialogProps> = () => {
  const { t } = useTranslation('domains', { keyPrefix: 'callPools.depositBatchDialog' })
  const {
    dialogs: { nftBatchDeposit },
  } = useCallPools()
  const { close, nfts } = nftBatchDeposit

  const callPools = useMemo(() => {
    if (!nfts || !nfts.length) return []
    const returnValue = Object.values(groupBy(nfts, 'nftAddress'))
    return returnValue
  }, [nfts])

  return (
    <Dialog
      {...{ ...nftBatchDeposit, title: t('title') }}
      fullScreen
      actions={
        <Fragment>
          <Button variant="outlined" onClick={close}>
            {t('cancel')}
          </Button>
        </Fragment>
      }
    >
      <Grid container spacing={2}>
        {callPools.map((nfts, index) => (
          <Grid item xs={12} lg={4} md={6} key={index}>
            <CallPools key={index} nfts={nfts} />
          </Grid>
        ))}
      </Grid>
    </Dialog>
  )
}

export default NFTDepositBatchDialog
