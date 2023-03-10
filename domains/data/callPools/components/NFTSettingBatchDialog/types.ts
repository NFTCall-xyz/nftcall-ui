import type { useFormik } from 'formik'

import type { UseStorage } from 'app/hooks/useStorage'

import type { NFT } from 'domains/data/nft/types'

export type NFTSettingForm = Pick<NFT, 'minStrikePrice' | 'maxExpriyTime'> & { lowerLimitOfStrikePrice: string }

export type NFTSettingFormikStorage = UseStorage<ReturnType<typeof useFormik<NFTSettingForm>>>

export type NFTSettingFormProps = {
  nft: NFT
  //   onSubmit: (values: NFTSettingForm) => void
  formikStorage: NFTSettingFormikStorage
}
