import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'

import type { CallPool } from 'domains/data/callPools'

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
      <Stack spacing={1} direction="row" alignItems="center">
        <Avatar alt={name} src={imageUrl} sx={{ width: 40, height: 40, border: '' }}>
          {name}
        </Avatar>
        <p>{name}</p>
      </Stack>
    </TableCell>
  )
}
