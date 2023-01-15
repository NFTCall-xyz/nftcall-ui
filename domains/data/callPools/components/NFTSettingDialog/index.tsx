import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import { MIN_STRIKE_PRICE_MAP, MAX_EXPRIY_TIME_MAP } from 'app/constant/callPools'
import { safeGet } from 'app/utils/get'
import Dialog from 'components/dialog/Dialog'
import FormTextField from 'components/form/FormTextField'
import SubmitBotton from 'components/form/SubmitBotton'
import { useWallet } from 'domains'
import { transaction } from 'domains/controllers/adapter/transaction'
import { useCallPools, useNetwork } from 'domains/data'
import { useSendTransaction } from 'lib/protocol/hooks/sendTransaction'
import { noop } from 'lodash'
import { Fragment, useCallback } from 'react'
import NFTCard from './NFTCard'
import { useForm } from './useForm'
import { useTranslation } from 'next-i18next'
import { Span } from 'components/Typography'
import Tooltip from '@mui/material/Tooltip'
import HelpIcon from '@mui/icons-material/Help'

type NFTSettingDialogProps = {}
const NFTSettingDialog: FC<NFTSettingDialogProps> = () => {
  const { t } = useTranslation(['app-sell'])
  const {
    dialogs: { nftSetting },
  } = useCallPools()
  const { close } = nftSetting
  const { formik } = useForm()
  const { handleSubmit, isSubmitting, setSubmitting } = formik
  const { tokenId, nftAddress, callPoolAddress, actions } = safeGet(() => nftSetting.nft) || ({} as undefined)
  const { setStatus } = safeGet(() => actions) || ({ setStatus: noop } as undefined)
  const {
    contracts: { callPoolService },
  } = useNetwork()
  const { networkAccount } = useWallet()
  const sendTransaction = useSendTransaction()
  const handleWithdraw = useCallback(() => {
    setSubmitting(true)
    return transaction({
      createTransaction: callPoolService.withdraw({
        callPool: callPoolAddress,
        user: networkAccount,
        tokenId,
      }),
      setStatus: () => {},
      sendTransaction,
      isOnlyApprove: false,
    })
      .then(() => {
        setStatus('Removed')
        close()
      })
      .finally(() => setSubmitting(false))
  }, [callPoolAddress, callPoolService, close, networkAccount, sendTransaction, setStatus, setSubmitting, tokenId])
  return (
    <Dialog
      {...{ ...nftSetting, title: t('settingsDialog.title') }}
      actions={
        <Fragment>
          <Button variant='outlined' onClick={close}>
            {t('settingsDialog.cancel')}
          </Button>
          <Button disabled={isSubmitting} onClick={handleWithdraw} variant='contained'>
            {t('nftcard.withdraw')}
          </Button>
          <SubmitBotton onClick={() => handleSubmit()} isSubmitting={isSubmitting} variant='contained'>
            {t('settingsDialog.submit')}
          </SubmitBotton>
        </Fragment>
      }
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={4} sx={{ width: '100vw', maxWidth: '450px', paddingTop: 2 }}>
          <NFTCard tokenId={tokenId} nftAddress={nftAddress} />
          <Stack spacing={1}>
            <Stack alignItems='center' spacing={0.5} direction='row'>
              <Span fontWeight="bold">{t('settingsDialog.minStrikePrice')}</Span>
              <Tooltip title={t('settingsDialog.minStrikePriceTip')}>
                <HelpIcon sx={{ color: 'text.secondary', width: 16 }} />
              </Tooltip>
            </Stack>
            <FormTextField
              formik={formik}
              fieldKey="minStrikePrice"
              label=""
              textFieldProps={{
                select: true,
              }}
            >
              {MIN_STRIKE_PRICE_MAP.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </FormTextField>
          </Stack>
          <Stack spacing={1}>
            <Stack alignItems='center' spacing={0.5} direction='row'>
              <Span fontWeight="bold">{t('settingsDialog.maxExpiryTime')}</Span>
              <Tooltip title={t('settingsDialog.maxExpiryTimeTip')}>
                <HelpIcon sx={{ color: 'text.secondary', width: 16 }} />
              </Tooltip>
            </Stack>
            <FormTextField
              formik={formik}
              fieldKey="maxExpriyTime"
              label=""
              textFieldProps={{
                select: true,
              }}
            >
              {MAX_EXPRIY_TIME_MAP.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </FormTextField>
          </Stack>
        </Stack>
      </form>
    </Dialog>
  )
}

export default NFTSettingDialog
