import BasicTable from 'components/table/BasicTable'

import { useTable } from './useTable'

const List = () => {
  const table = useTable()

  return <BasicTable {...table} />
}

export default List
