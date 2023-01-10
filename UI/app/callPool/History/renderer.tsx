import TableCell from '@mui/material/TableCell'
import LinkToAddress from 'components/button/LinkToAddress'
import { Paragraph } from 'components/Typography'

import { format } from 'date-fns'
import NumberDisplay from 'lib/math/components/NumberDisplay'

import type { Position } from './adapter'

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
export const accountCellRenderer = ({ rowData: { userAddress } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <LinkToAddress address={userAddress} />
    </TableCell>
  )
}

export const NFTCellRenderer = ({ rowData: { tokenId, nftAddress } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <LinkToAddress address={nftAddress} name={tokenId} />
    </TableCell>
  )
}

export const expiryDateCellRenderer = ({ rowData: { endTime } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <Paragraph fontSize={14} color="text.secondary">{format(endTime, 'MMM dd hh:mm')}</Paragraph>
    </TableCell>
  )
}

export const premiumCellRenderer = ({ rowData: { premiumToOwner } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <NumberDisplay value={premiumToOwner} options="number" />
    </TableCell>
  )
}
