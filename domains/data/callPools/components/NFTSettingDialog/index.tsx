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

type NFTSettingDialogProps = {}
const NFTSettingDialog: FC<NFTSettingDialogProps> = () => {
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
      .then(() => setStatus('Removed'))
      .finally(() => setSubmitting(false))
  }, [callPoolAddress, callPoolService, networkAccount, sendTransaction, setStatus, setSubmitting, tokenId])
  return (
    <Dialog
      {...{ ...nftSetting, title: 'Setting' }}
      actions={
        <Fragment>
          <Button onClick={close}>Cancel</Button>
          <Button onClick={handleWithdraw}>withdraw</Button>
          <SubmitBotton onClick={() => handleSubmit()} isSubmitting={isSubmitting}>
            Setting
          </SubmitBotton>
        </Fragment>
      }
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={4} sx={{ width: '100vw', maxWidth: '450px', paddingTop: 2 }}>
          <NFTCard tokenId={tokenId} nftAddress={nftAddress} />
          <FormTextField
            formik={formik}
            fieldKey="minStrikePrice"
            label="Minimum Strike Price"
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
          <FormTextField
            formik={formik}
            fieldKey="maxExpriyTime"
            label="Maximum Expiry Duration"
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
      </form>
    </Dialog>
  )
}

export default NFTSettingDialog
