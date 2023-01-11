import BasicTable from 'components/table/BasicTable'
import { useNFT } from 'domains/data'
import { useMemo, useEffect } from 'react'
import { getWalletDataByNFTs } from 'store/nft/tokenId/wallet/adapter/getWalletData'

import { useTable } from './useTable'

const History = () => {
  const table = useTable()
  const { data } = table

  const {
    tokenId: { updateAssets },
  } = useNFT()

  const { wallet, key } = useMemo(() => getWalletDataByNFTs(data), [data])

  useEffect(() => {
    updateAssets(wallet)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])

  return <BasicTable {...table} />
}

export default History
