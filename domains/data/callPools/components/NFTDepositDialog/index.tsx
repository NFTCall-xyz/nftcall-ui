import { useTranslation } from 'next-i18next'
import { Fragment } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'

import { MAX_EXPRIY_TIME_MAP, MIN_STRIKE_PRICE_MAP } from 'app/constant/callPools'
import { safeGet } from 'app/utils/get'

import { TooltipSpan } from 'components/Typography'
import Dialog from 'components/dialog/Dialog'
import FormNumberFieldField from 'components/form/FormNumberField'
import FormTextField from 'components/form/FormTextField'
import SubmitBotton from 'components/form/SubmitBotton'

import { useCallPools } from 'domains/data'

import NFTCard from './NFTCard'
import { useForm } from './useForm'

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
      fullWidth
      maxWidth="sm"
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
        <Stack spacing={4} sx={{ paddingTop: 2 }}>
          <NFTCard tokenId={tokenId} nftAddress={nftAddress} />
          <Stack spacing={1}>
            <Stack alignItems="center" spacing={0.5} direction="row">
              <Tooltip title={tNFT('minStrikePriceTip')}>
                <Box>
                  <TooltipSpan fontWeight="medium" color="text.priamry">
                    {tNFT('minStrikePrice')}
                  </TooltipSpan>
                </Box>
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
              <Tooltip title={tNFT('lowerLimitOfStrikePriceTip')}>
                <Box>
                  <TooltipSpan fontWeight="medium" color="text.priamry">
                    {tNFT('lowerLimitOfStrikePrice')}
                  </TooltipSpan>
                </Box>
              </Tooltip>
            </Stack>
            <FormNumberFieldField formik={formik} fieldKey="lowerLimitOfStrikePrice" />
          </Stack>
          <Stack spacing={1}>
            <Stack alignItems="center" spacing={0.5} direction="row">
              {/* <Span fontWeight="bold">{tNFT('maxExpiryTime')}</Span> */}
              <Tooltip title={tNFT('maxExpiryTimeTip')}>
                <Box>
                  <TooltipSpan fontWeight="medium" color="text.priamry">
                    {tNFT('maxExpiryTime')}
                  </TooltipSpan>
                </Box>
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
