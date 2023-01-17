import TableCell from '@mui/material/TableCell'

import type { Position } from './adapter'
import OptionStatus from 'UI/app/positions/OptionStatus'
import NFTCell from 'domains/data/nft/components/NFTCell'

export type TableCellProps = {
  cellData?: any
  columnData?: any
  columnIndex: number
  dataKey: string
  isScrolling: boolean
  parent?: any
  rowData: Position
  rowIndex: number
}

export const nftCellRenderer = ({ rowData }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <NFTCell {...{ nft: rowData, sx: { width: 40, height: 40 } }} />
    </TableCell>
  )
}

export const statusCellRenderer = ({ rowData: { status } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <OptionStatus status={status} />
    </TableCell>
  )
}
