import { useTranslation } from 'next-i18next'
import { useCallback } from 'react'

import HelpIcon from '@mui/icons-material/Help'
import SettingsIcon from '@mui/icons-material/Settings'
import { Button, MenuItem } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'
import ListItem from '@mui/material/ListItem'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'

import { MAX_EXPRIY_TIME_MAP, MIN_STRIKE_PRICE_MAP } from 'app/constant/callPools'
import { useAnchorMenu } from 'app/hooks/useAnchor'

import { H4, Span } from 'components/Typography'
import { H3 } from 'components/Typography'
import FormNumberFieldField from 'components/form/FormNumberField'
import FormTextField from 'components/form/FormTextField'

import type { CallPool } from 'domains/data/callPools'

import { useSettingForm } from '../NFTCard/useForm'
import type { NFTSettingFormikStorage } from '../types'

interface CallPoolCardProps {
  callPool: CallPool
  formikStorage: NFTSettingFormikStorage
}

const CallPoolCard: FCC<React.PropsWithChildren<CallPoolCardProps>> = ({ callPool, formikStorage, children }) => {
  const { t } = useTranslation('domains', { keyPrefix: 'callPools.settingBatchDialog' })
  const { t: tNFT } = useTranslation('domains', { keyPrefix: 'nft' })
  const {
    collection: { name, imageUrl },
  } = callPool
  const { Menu, open, close } = useAnchorMenu()
  const { formik } = useSettingForm()

  const handleSubmit = useCallback(() => {
    const submit = () => {
      const formiks = formikStorage.get()
      if (!formiks.length) return Promise.resolve()
      return formik.submitForm().then((values) => {
        formiks.forEach((formik) => {
          formik.setValues((states) => ({
            ...states,
            ...values,
          }))
        })
      })
    }
    return submit().then(() => {
      close()
    })
  }, [close, formik, formikStorage])

  return (
    <Card>
      <CardContent>
        <ListItem
          sx={{ padding: 0 }}
          secondaryAction={
            <IconButton edge="end" onClick={open}>
              <SettingsIcon />
            </IconButton>
          }
        >
          <Stack spacing={2} direction="row" alignItems="center">
            <Avatar alt={name} src={imageUrl} sx={{ width: 65, height: 65, border: '' }}>
              {name}
            </Avatar>
            <H3>{name}</H3>
          </Stack>
        </ListItem>
        <Menu>
          <Card sx={{ border: '1px solid' }}>
            <CardContent>
              <H4>{t('setting.title')}</H4>
              <Stack spacing={4} sx={{ maxWidth: '450px', paddingTop: 2 }}>
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
                <Button variant="contained" onClick={handleSubmit} disabled={formik.isSubmitting}>
                  {t('setting.btn')}
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Menu>
        <Box padding={2}>{children}</Box>
      </CardContent>
    </Card>
  )
}

export default CallPoolCard
