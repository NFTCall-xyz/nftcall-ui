import TableCell from '@mui/material/TableCell'
import LinkToAddress from 'components/button/LinkToAddress'

export type TableCellProps = {
  cellData?: any
  columnData?: any
  columnIndex: number
  dataKey: string
  isScrolling: boolean
  parent?: any
  rowData: any
  rowIndex: number
}
export const fromCellRenderer = ({ cellData, rowData: { vault, type } }: TableCellProps) => {
  const defalutName = type === 'Fund Transfer' ? 'CEX' : undefined
  const name = cellData === vault ? 'Contract' : defalutName
  return (
    <TableCell align="center" component="div">
      <LinkToAddress name={name} address={cellData} />
    </TableCell>
  )
}
