import BasicTable from 'components/table/BasicTable'

import { useTable } from './useTable'

const Sold = () => {
  const table = useTable()

  return <BasicTable {...table} />
}

export default Sold
