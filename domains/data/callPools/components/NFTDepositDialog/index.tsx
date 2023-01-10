import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import { MIN_STRIKE_PRICE_MAP, MAX_EXPRIY_TIME_MAP } from 'app/constant/callPools'
import { safeGet } from 'app/utils/get'
import Dialog from 'components/dialog/Dialog'
import FormTextField from 'components/form/FormTextField'
import SubmitBotton from 'components/form/SubmitBotton'
import { useCallPools } from 'domains/data'
import { Fragment } from 'react'
import NFTCard from './NFTCard'
import { useForm } from './useForm'

type NFTDepositDialogProps = {}
const NFTDepositDialog: FC<NFTDepositDialogProps> = () => {
  const {
    dialogs: { nftDeposit },
  } = useCallPools()
  const { close } = nftDeposit
  const { formik } = useForm()
  const { handleSubmit, isSubmitting } = formik
  const { tokenId, nftAddress } = safeGet(() => nftDeposit.nft) || ({} as undefined)
  return (
    <Dialog
      {...{ ...nftDeposit, title: 'Deposit' }}
      actions={
        <Fragment>
          <Button onClick={close}>Cancel</Button>
          <SubmitBotton onClick={() => handleSubmit()} isSubmitting={isSubmitting}>
            Deposit
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

export default NFTDepositDialog
