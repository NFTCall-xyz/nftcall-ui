import BasicTable from 'components/table/BasicTable'

import { useTable } from './useTable'

const Claims = () => {
  const table = useTable()

  return <BasicTable {...table} />
}

export default Claims
