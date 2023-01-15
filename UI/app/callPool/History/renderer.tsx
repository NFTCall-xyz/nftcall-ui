import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import TableCell from '@mui/material/TableCell'
import LinkToAddress from 'components/button/LinkToAddress'
import { Paragraph } from 'components/Typography'

import NFTIcon from 'domains/data/nft/components/NFTIcon'

import type { Position } from './adapter'
import OptionStatus from 'UI/app/positions/OptionStatus'

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
      <Stack spacing={1} direction="row" alignItems="center">
        <Box sx={{ width: 40 }}>
          <NFTIcon nft={{ tokenId, nftAddress }} />
        </Box>
        <Stack spacing={0.5}>
          <Paragraph>#{tokenId}</Paragraph>
          {/* <p>{nftAddress}</p> */}
        </Stack>
      </Stack>
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
