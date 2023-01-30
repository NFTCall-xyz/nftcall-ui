import BasicTable from 'components/table/BasicTable'

import { useUpdateNFTAssets } from 'domains/data/nft/hooks/useUpdateNFTAssets'

import { useTable } from './useTable'

type PositionsProps = {
  isActive: boolean
}
const Positions: FC<PositionsProps> = (props) => {
  const table = useTable(props)
  useUpdateNFTAssets(table.data)

  return <BasicTable {...table} />
}

export default Positions
