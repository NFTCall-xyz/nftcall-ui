import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import TableCell from '@mui/material/TableCell'
import LinkToAddress from 'components/button/LinkToAddress'
import { Paragraph } from 'components/Typography'

import { format } from 'date-fns'
import NFTIcon from 'domains/data/nft/components/NFTIcon'
import NumberDisplay from 'lib/math/components/NumberDisplay'

import type { Position } from './adapter'
import TokenIcon from 'lib/protocol/components/TokenIcon'
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
      <Stack spacing={1} direction="row" alignItems='center'>
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

export const expiryDateCellRenderer = ({ rowData: { endTime } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <Paragraph fontSize={14} color="text.secondary">
        {format(endTime, 'MMM dd hh:mm')}
      </Paragraph>
    </TableCell>
  )
}

export const premiumCellRenderer = ({ rowData: { premiumToOwner } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <Stack spacing={0.5} direction="row" alignItems="center">
        <TokenIcon symbol='eth' sx={{ width: 14, height: 14 }} />
        <NumberDisplay value={premiumToOwner} options="number" />
      </Stack>
    </TableCell>
  )
}

export const strikePriceCellRenderer = ({ rowData: { strikePrice } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <Stack spacing={0.5} direction="row" alignItems="center">
        <TokenIcon symbol='eth' sx={{ width: 14, height: 14 }} />
        <NumberDisplay value={strikePrice} options="number" />
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

