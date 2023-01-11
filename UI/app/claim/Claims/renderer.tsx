import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import type { CallPool } from 'domains/data/callPools'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

export type TableCellProps = {
  cellData?: any
  columnData?: any
  columnIndex: number
  dataKey: string
  isScrolling: boolean
  parent?: any
  rowData: CallPool
  rowIndex: number
}

export const collectionNameCellRenderer = ({ rowData: { collection } }: TableCellProps) => {
  const { name, imageUrl } = collection || ({} as undefined)
  return (
    <TableCell align="center" component="div">
      <Stack spacing={1} direction="row">
        <Avatar alt={name} src={imageUrl} sx={{ width: 40, height: 40, border: '' }}>
          {name}
        </Avatar>
        <p>{name}</p>
      </Stack>
    </TableCell>
  )
}

export const cumulativeEarningsCellRenderer = ({
  rowData: {
    info: { symbol },
  },
}: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <Stack spacing={1} direction="row" alignItems="center">
        <TokenIcon symbol={symbol} sx={{ width: 16, height: 16 }} />
        <NumberDisplay value={0} />
      </Stack>
    </TableCell>
  )
}
export const claimableEarningsCellRenderer = ({
  rowData: {
    balanceOf,
    info: { symbol },
  },
}: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <Stack spacing={1} direction="row" alignItems="center">
        <TokenIcon symbol={symbol} sx={{ width: 16, height: 16 }} />
        <NumberDisplay value={balanceOf} />
      </Stack>
    </TableCell>
  )
}
