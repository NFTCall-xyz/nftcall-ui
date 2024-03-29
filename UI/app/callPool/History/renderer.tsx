import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import { Paragraph } from 'components/Typography'

import NFTIcon from 'domains/data/nft/components/NFTIcon'
import PositionStatus from 'domains/data/position/components/PositionStatus'
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
      <PositionStatus status={status} />
    </TableCell>
  )
}
