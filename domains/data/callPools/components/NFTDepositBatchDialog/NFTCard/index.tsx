import { useTranslation } from 'next-i18next'
import type { FC } from 'react'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HelpIcon from '@mui/icons-material/Help'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import MenuItem from '@mui/material/MenuItem'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'

import { MAX_EXPRIY_TIME_MAP, MIN_STRIKE_PRICE_MAP } from 'app/constant/callPools'

import { H3 } from 'components/Typography'
import { Span } from 'components/Typography'
import FormNumberFieldField from 'components/form/FormNumberField'
import FormTextField from 'components/form/FormTextField'

import NFTIcon from 'domains/data/nft/components/NFTIcon'
import { useNFTAssetsData } from 'domains/data/nft/hooks/useNFTAssetsData'

import type { NFTDepositFormProps } from '../types'
import { useForm } from './useForm'

export type NFTCardProps = NFTDepositFormProps & { formDisabled: boolean }

const NFTCard: FC<NFTCardProps> = (props) => {
  const { t } = useTranslation('domains', { keyPrefix: 'nft' })
  const { nft, formDisabled } = props
  const { nftAssetsData } = useNFTAssetsData(nft)
  const title = '#' + nft.tokenId
  const { formik } = useForm(props)

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ padding: 2 }}>
        <Stack spacing={2} direction="row" alignItems="center">
          <NFTIcon nftAssetsData={nftAssetsData} sx={{ width: '60px' }} />
          <H3>{title}</H3>
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 2 }}>
        <Stack spacing={2}>
          <Stack spacing={1}>
            <Stack alignItems="center" spacing={0.5} direction="row">
              <Span fontWeight="bold">{t('minStrikePrice')}</Span>
              <Tooltip title={t('minStrikePriceTip')}>
                <HelpIcon sx={{ color: 'text.secondary', width: 16 }} />
              </Tooltip>
            </Stack>
            <FormTextField
              formik={formik}
              fieldKey="minStrikePrice"
              label=""
              textFieldProps={{
                select: true,
                disabled: formDisabled,
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
              <Span fontWeight="bold">{t('lowerLimitOfStrikePrice')}</Span>
              <Tooltip title={t('lowerLimitOfStrikePriceTip')}>
                <HelpIcon sx={{ color: 'text.secondary', width: 16 }} />
              </Tooltip>
            </Stack>
            <FormNumberFieldField formik={formik} fieldKey="lowerLimitOfStrikePrice" disabled={formDisabled} />
          </Stack>
          <Stack spacing={1}>
            <Stack alignItems="center" spacing={0.5} direction="row">
              <Span fontWeight="bold">{t('maxExpiryTime')}</Span>
              <Tooltip title={t('maxExpiryTimeTip')}>
                <HelpIcon sx={{ color: 'text.secondary', width: 16 }} />
              </Tooltip>
            </Stack>
            <FormTextField
              formik={formik}
              fieldKey="maxExpriyTime"
              label=""
              textFieldProps={{
                select: true,
                disabled: formDisabled,
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
      </AccordionDetails>
    </Accordion>
  )
}

export default NFTCard
