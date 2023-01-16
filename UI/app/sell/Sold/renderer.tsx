import TableCell from '@mui/material/TableCell'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'

import type { NFTTransaction } from './adapter'
import NFTIcon from 'domains/data/nft/components/NFTIcon'
import { Paragraph, Span } from 'components/Typography'

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

export const NFTCellRenderer = ({ rowData: { tokenId, nftAddress } }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <Stack spacing={1} direction="row">
        <Box sx={{ width: 40 }}>
          <NFTIcon nft={{ tokenId, nftAddress }} />
        </Box>
        <Stack alignItems="start">
          <Paragraph>#{tokenId}</Paragraph>
          <Span color="text.secondary">{'BoredApeClubYacht'}</Span>
        </Stack>
      </Stack>
    </TableCell>
  )
}
