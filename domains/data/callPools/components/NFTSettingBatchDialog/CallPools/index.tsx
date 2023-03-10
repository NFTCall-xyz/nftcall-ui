import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { useImmer } from 'use-immer'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { useStorage } from 'app/hooks/useStorage'

import { useCallPools } from 'domains/data'
import type { NFT } from 'domains/data/nft/types'
import { getNFTId } from 'domains/data/nft/utils/id'

import NFTCard from '../NFTCard'
import type { NFTSettingFormikStorage } from '../types'
import CallPoolCard from './CallPoolCard'
import { useRequest } from './request'

export type CallPoolsProps = {
  nfts: NFT[]
  update: () => void
}
const CallPools: FC<CallPoolsProps> = (props: CallPoolsProps) => {
  const { nfts, update } = props
  const { t } = useTranslation('domains', { keyPrefix: 'callPools.settingBatchDialog' })
  const formikStorage: NFTSettingFormikStorage = useStorage()
  const [loading, setLoading] = useImmer(false)
  const [isWithdrew, setIsWithdrew] = useImmer(false)
  const { callPools } = useCallPools()
  const callPool = useMemo(() => {
    const { callPoolAddress } = nfts[0]
    return callPools.find((i) => i.address.CallPool === callPoolAddress)
  }, [callPools, nfts])
  const { requestSetting, requestWithdraw } = useRequest()

  const handleSettingSubmit = useCallback(() => {
    const formiks = formikStorage.get()
    if (!formiks.length) return
    setLoading(true)
    const promises: any[] = []
    formiks.forEach((formik) => promises.push(formik.submitForm()))
    return Promise.all(promises)
      .then((data) => requestSetting({ nfts: data, callPool }))
      .then(() => update())
      .finally(() => {
        setLoading(false)
      })
  }, [callPool, formikStorage, requestSetting, setLoading, update])

  const handleWithdrawSubmit = useCallback(() => {
    const formiks = formikStorage.get()
    if (!formiks.length) return
    setLoading(true)
    const promises: any[] = []
    formiks.forEach((formik) => promises.push(formik.submitForm()))
    return Promise.all(promises)
      .then((data) => requestWithdraw({ nfts: data, callPool }))
      .then(() => {
        update()
        setIsWithdrew(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [callPool, formikStorage, requestWithdraw, setIsWithdrew, setLoading, update])

  return (
    <CallPoolCard callPool={callPool} formikStorage={formikStorage}>
      <Stack spacing={2}>
        <Box>
          {nfts.map((nft) => (
            <NFTCard key={getNFTId(nft)} formDisabled={isWithdrew} nft={nft} formikStorage={formikStorage} />
          ))}
        </Box>
        {isWithdrew ? (
          <Button variant="contained" disabled fullWidth>
            {t('withdrew')}
          </Button>
        ) : (
          <Stack spacing={2} direction="row">
            <Button variant="contained" fullWidth onClick={() => handleWithdrawSubmit()} disabled={loading}>
              {t('withdraw')}
            </Button>
            <Button variant="contained" fullWidth onClick={() => handleSettingSubmit()} disabled={loading}>
              {t('setting.btn')}
            </Button>
          </Stack>
        )}
      </Stack>
    </CallPoolCard>
  )
}

export default CallPools
