import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'
import { Paragraph } from 'components/Typography'

import { format } from 'date-fns'
import NFTIcon from 'domains/data/nft/components/NFTIcon'
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

export const NFTCellRenderer = ({ rowData: { tokenId, nftAddress } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <Stack spacing={1} direction="row">
        <Box sx={{ width: 40 }}>
          <NFTIcon nft={{ tokenId, nftAddress }} />
        </Box>
        <Stack spacing={2}>
          <p>{tokenId}</p>
          {/* <p>{nftAddress}</p> */}
        </Stack>
      </Stack>
    </TableCell>
  )
}

export const expiryDateCellRenderer = ({ rowData: { endTime } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <Paragraph>{format(endTime, 'MM/dd/yyyy')}</Paragraph>
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
