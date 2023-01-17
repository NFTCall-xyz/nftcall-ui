import TableCell from '@mui/material/TableCell'

import PositionStatus from 'domains/data/position/components/PositionStatus'
import NFTCell from 'domains/data/nft/components/NFTCell'
import type { Position } from 'domains/data/position/types'

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
      <PositionStatus status={status} />
    </TableCell>
  )
}
