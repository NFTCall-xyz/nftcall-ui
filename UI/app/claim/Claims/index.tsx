import BasicTable from 'components/table/BasicTable'
import { useUpdateNFTAssets } from 'domains/data/nft/hooks/useUpdateNFTAssets'

import { useTable } from './useTable'

const Claims = () => {
  const table = useTable()
  useUpdateNFTAssets(table.data)

  return <BasicTable {...table} />
}

export default Claims
