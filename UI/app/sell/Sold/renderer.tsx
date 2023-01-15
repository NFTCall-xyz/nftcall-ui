import TableCell from '@mui/material/TableCell'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import LinkToAddress from 'components/button/LinkToAddress'

import type { NFTTransaction } from './adapter'
import NFTIcon from 'domains/data/nft/components/NFTIcon'

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
