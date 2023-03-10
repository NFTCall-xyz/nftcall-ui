import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { useImmer } from 'use-immer'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { useStorage } from 'app/hooks/useStorage'

import { useCallPools, useNFT } from 'domains/data'
import type { NFT } from 'domains/data/nft/types'
import { getNFTId } from 'domains/data/nft/utils/id'

import NFTCard from '../NFTCard'
import type { NFTDepositFormikStorage } from '../types'
import CallPoolCard from './CallPoolCard'
import { useRequest } from './request'

export type CallPoolsProps = {
  nfts: NFT[]
}
const CallPools: FC<CallPoolsProps> = (props: CallPoolsProps) => {
  const { nfts } = props
  const { t } = useTranslation('domains', { keyPrefix: 'callPools.depositBatchDialog' })
  const formikStorage: NFTDepositFormikStorage = useStorage()
  const [loading, setLoading] = useImmer(false)
  const [isDeposited, setIsDeposited] = useImmer(false)
  const { callPools } = useCallPools()
  const callPool = useMemo(() => {
    const { callPoolAddress } = nfts[0]
    return callPools.find((i) => i.address.CallPool === callPoolAddress)
  }, [callPools, nfts])
  const { request } = useRequest()
  const {
    tokenId: { updateWallet },
  } = useNFT()

  const handleSubmit = useCallback(() => {
    const formiks = formikStorage.get()
    if (!formiks.length) return
    setLoading(true)
    const promises: any[] = []
    formiks.forEach((formik) => promises.push(formik.submitForm()))
    return Promise.all(promises)
      .then((data) => request({ nfts: data, callPool }))
      .then(() => {
        setIsDeposited(true)
        updateWallet()
      })
      .finally(() => {
        setLoading(false)
      })
  }, [callPool, formikStorage, request, setIsDeposited, setLoading, updateWallet])

  return (
    <CallPoolCard callPool={callPool} formikStorage={formikStorage}>
      <Stack spacing={2}>
        <Box>
          {nfts.map((nft) => (
            <NFTCard key={getNFTId(nft)} formDisabled={isDeposited} nft={nft} formikStorage={formikStorage} />
          ))}
        </Box>
        {isDeposited ? (
          <Button variant="contained" disabled>
            {t('deposited')}
          </Button>
        ) : (
          <Button variant="contained" onClick={() => handleSubmit()} disabled={loading}>
            {t('deposit')}
          </Button>
        )}
      </Stack>
    </CallPoolCard>
  )
}

export default CallPools
