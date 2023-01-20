import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import { MIN_STRIKE_PRICE_MAP, MAX_EXPRIY_TIME_MAP } from 'app/constant/callPools'
import { safeGet } from 'app/utils/get'
import Dialog from 'components/dialog/Dialog'
import FormTextField from 'components/form/FormTextField'
import SubmitBotton from 'components/form/SubmitBotton'
import { useCallPools } from 'domains/data'
import { Fragment, useEffect, useMemo, useState } from 'react'
import NFTCard from './NFTCard'
import { useForm } from './useForm'
import { useTranslation } from 'next-i18next'
import { Span } from 'components/Typography'
import Tooltip from '@mui/material/Tooltip'
import HelpIcon from '@mui/icons-material/Help'
import FlexBetween from 'components/flexbox/FlexBetween'
import ListOnMarket from './ListOnMarket'
import { NFTStatus } from 'domains/data/nft/types'
import FormNumberFieldField from 'components/form/FormNumberField'

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
  const [status, setStatus] = useState(sourceStatus)
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
    [actions, formik]
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
        <Stack spacing={4} sx={{ width: '100vw', maxWidth: '450px', paddingTop: 2 }}>
          <NFTCard tokenId={tokenId} nftAddress={nftAddress} />
          <FlexBetween>
            <Span fontWeight="bold">{t('listOnMarket')}</Span>
            <ListOnMarket
              checked={isListOnMarket}
              loading={isSubmitting}
              nft={nftSetting.nft}
              nftActions={nftActions}
            />
          </FlexBetween>
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
              <Span fontWeight="bold">{tNFT('lowerLimitOfStrikePrice')}</Span>
              <Tooltip title={tNFT('lowerLimitOfStrikePriceTip')}>
                <HelpIcon sx={{ color: 'text.secondary', width: 16 }} />
              </Tooltip>
            </Stack>
            <FormNumberFieldField formik={formik} fieldKey="lowerLimitOfStrikePrice" />
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

export default NFTSettingDialog
