import TableCell from '@mui/material/TableCell'
import LinkToAddress from 'components/button/LinkToAddress'
import { Paragraph } from 'components/Typography'

import { format } from 'date-fns'

import type { NFTTransaction } from './adapter'

export type TableCellProps = {
  cellData?: any
  columnData?: any
  columnIndex: number
  dataKey: string
  isScrolling: boolean
  parent?: any
  rowData: NFTTransaction
  rowIndex: number
}
export const linkToAddressCellRenderer = ({ cellData }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <LinkToAddress address={cellData} />
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

export const expiryDateCellRenderer = ({ cellData }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <Paragraph>{format(cellData, 'MM/dd/yyyy')}</Paragraph>
    </TableCell>
  )
}
