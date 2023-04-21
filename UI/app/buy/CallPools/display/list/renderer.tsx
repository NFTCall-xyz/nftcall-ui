import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import type { CallPool } from 'domains/data/callPools'
import PoolStatus from '../PoolStatus'

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

export const collectionNameCellRenderer = ({ rowData: { collection, stats } }: TableCellProps) => {
  const { name, imageUrl } = collection || ({} as undefined)
  return (
    <TableCell component="div">
      <Stack spacing={1} direction="row" alignItems="center" paddingX={4}>
        <Avatar alt={name} src={imageUrl} sx={{ width: 40, height: 40, border: '' }}>
          {name}
        </Avatar>
        <p>{name}</p>
        <PoolStatus deactivate={stats.deactivate} paused={stats.paused} />
      </Stack>
    </TableCell>
  )
}
