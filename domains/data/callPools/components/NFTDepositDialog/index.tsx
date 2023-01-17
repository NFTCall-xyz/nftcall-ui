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
import { useTranslation } from 'next-i18next'
import { Span } from 'components/Typography'
import Tooltip from '@mui/material/Tooltip'
import HelpIcon from '@mui/icons-material/Help'

type NFTDepositDialogProps = {}
const NFTDepositDialog: FC<NFTDepositDialogProps> = () => {
  const { t } = useTranslation('domains', { keyPrefix: 'callPools' })
  const { t: tNFT } = useTranslation('domains', { keyPrefix: 'nft' })
  const {
    dialogs: { nftDeposit },
  } = useCallPools()
  const { close } = nftDeposit
  const { formik } = useForm()
  const { handleSubmit, isSubmitting } = formik
  const { tokenId, nftAddress } = safeGet(() => nftDeposit.nft) || ({} as undefined)
  return (
    <Dialog
      {...{ ...nftDeposit, title: t('depositDialog.title') }}
      actions={
        <Fragment>
          <Button variant="outlined" onClick={close}>
            {t('depositDialog.cancel')}
          </Button>
          <SubmitBotton variant="contained" onClick={() => handleSubmit()} isSubmitting={isSubmitting}>
            {t('depositDialog.deposit')}
          </SubmitBotton>
        </Fragment>
      }
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={4} sx={{ width: '100vw', maxWidth: '450px', paddingTop: 2 }}>
          <NFTCard tokenId={tokenId} nftAddress={nftAddress} />
          <Stack spacing={1}>
            <Stack alignItems="center" spacing={0.5} direction="row">
              <Span fontWeight="bold">{tNFT('minStrikePrice')}</Span>
              <Tooltip title={tNFT('minStrikePriceTip')}>
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
            <Stack alignItems="center" spacing={0.5} direction="row">
              <Span fontWeight="bold">{tNFT('maxExpiryTime')}</Span>
              <Tooltip title={tNFT('maxExpiryTimeTip')}>
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

export default NFTDepositDialog
