import BasicTable from 'components/table/BasicTable'
import { useNFT } from 'domains/data'
import { useUpdateNFTAssets } from 'domains/data/nft/hooks/useUpdateNFTAssets'
import { useMemo, useEffect } from 'react'
import { getWalletDataByNFTs } from 'store/nft/tokenId/wallet/adapter/getWalletData'

import { useTable } from './useTable'

const History = () => {
  const table = useTable()
  useUpdateNFTAssets(table.data)

  return <BasicTable {...table} />
}

export default History
