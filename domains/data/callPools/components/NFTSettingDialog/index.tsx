import { useTranslation } from 'next-i18next'
import { Fragment, useEffect, useMemo } from 'react'
import { useImmer } from 'use-immer'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'

import { MAX_EXPRIY_TIME_MAP, MIN_STRIKE_PRICE_MAP } from 'app/constant/callPools'
import { safeGet } from 'app/utils/get'

import { TooltipSpan } from 'components/Typography'
import Dialog from 'components/dialog/Dialog'
import FlexBetween from 'components/flexbox/FlexBetween'
import FormNumberFieldField from 'components/form/FormNumberField'
import FormTextField from 'components/form/FormTextField'
import SubmitBotton from 'components/form/SubmitBotton'

import { useCallPools } from 'domains/data'
import { NFTStatus } from 'domains/data/nft/types'

import ListOnMarket from './ListOnMarket'
import NFTCard from './NFTCard'
import { useForm } from './useForm'

type NFTSettingDialogProps = {}
const NFTSettingDialog: FC<NFTSettingDialogProps> = () => {
  const { t } = useTranslation('domains', { keyPrefix: 'callPools.settingsDialog' })
  const { t: tNFT } = useTranslation('domains', { keyPrefix: 'nft' })
  const {
    dialogs: { nftSetting },
  } = useCallPools()
  const { close } = nftSetting
  const { formik } = useForm()
  const { handleSubmit, isSubmitting } = formik
  const { tokenId, nftAddress, status: sourceStatus, actions } = safeGet(() => nftSetting.nft) || ({} as undefined)
  const [status, setStatus] = useImmer(sourceStatus)
  const nftActions = useMemo(
    () => ({
      ...actions,
      setStatus: (status: NFTStatus) => {
        setStatus(status)
        actions?.setStatus(status)
      },
      setLoading: (loading: boolean) => {
        formik.setSubmitting(loading)
        actions?.setLoading(loading)
      },
    }),
    [actions, formik, setStatus]
  )
  useEffect(() => {
    if (!tokenId) return
    setStatus(sourceStatus)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tokenId])
  const isListOnMarket = status !== NFTStatus.Deposited
  return (
    <Dialog
      {...{ ...nftSetting, title: t('title') }}
      fullWidth
      maxWidth="sm"
      actions={
        <Fragment>
          <Button variant="outlined" onClick={close}>
            {t('cancel')}
          </Button>
          <SubmitBotton onClick={() => handleSubmit()} isSubmitting={isSubmitting} variant="contained">
            {t('submit')}
          </SubmitBotton>
        </Fragment>
      }
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={4} sx={{ paddingTop: 2 }}>
          <NFTCard tokenId={tokenId} nftAddress={nftAddress} />
          <FlexBetween>
            <Tooltip title={t('listOnMartetTip')}>
              <Box>
                <TooltipSpan fontWeight="medium" color="text.priamry">
                  {t('listOnMarket')}
                </TooltipSpan>
              </Box>
            </Tooltip>
            <ListOnMarket
              checked={isListOnMarket}
              loading={isSubmitting}
              nft={nftSetting.nft}
              nftActions={nftActions}
            />
          </FlexBetween>
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

export default NFTSettingDialog
