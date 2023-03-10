import type { useFormik } from 'formik'

import type { UseStorage } from 'app/hooks/useStorage'

import type { NFT } from 'domains/data/nft/types'

export type NFTDepositForm = Pick<NFT, 'minStrikePrice' | 'maxExpriyTime'> & { lowerLimitOfStrikePrice: string }

export type NFTDepositFormikStorage = UseStorage<ReturnType<typeof useFormik<NFTDepositForm>>>

export type NFTDepositFormProps = {
  nft: NFT
  //   onSubmit: (values: NFTDepositForm) => void
  formikStorage: NFTDepositFormikStorage
}
