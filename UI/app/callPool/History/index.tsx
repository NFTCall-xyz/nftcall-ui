import BasicTable from 'components/table/BasicTable'

import { useTable } from './useTable'

const History = () => {
  const table = useTable()

  return <BasicTable {...table} />
}

export default History
