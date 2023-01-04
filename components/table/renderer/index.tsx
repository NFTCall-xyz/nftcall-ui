import type { TableCellRenderer } from 'react-virtualized'
import TableCell from '@mui/material/TableCell'
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined'
import Tooltip from '@mui/material/Tooltip'
import Stack from '@mui/material/Stack'
import NumberDisplay from 'lib/math/components/NumberDisplay'

import type { TableHeaderRenderer } from '../BasicTable/types'

export const headerRenderer: TableHeaderRenderer = (props) => {
  if (props.tip) return headerWithTooltipRenderer(props)
  return (
    <TableCell align="center" component="div" variant="head">
      {props.label as any}
    </TableCell>
  )
}

const headerWithTooltipRenderer: TableHeaderRenderer = ({ label, tip }) => {
  return (
    <TableCell align="center" component="div" variant="head">
      <Tooltip title={tip}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <span>{label as any}</span>
          <HelpOutlinedIcon fontSize="inherit" />
        </Stack>
      </Tooltip>
    </TableCell>
  )
}

export const cellRenderer: TableCellRenderer = ({ cellData }) => {
  return (
    <TableCell align="center" component="div">
      {cellData || '-'}
    </TableCell>
  )
}

export const symbolCellRenderer: TableCellRenderer = ({ cellData, rowData }) => {
  return (
    <TableCell align="center" component="div">
      <Stack spacing={0.5} direction="row">
        <NumberDisplay value={cellData} abbreviate={{}} />
        <span> {rowData.symbol}</span>
      </Stack>
    </TableCell>
  )
}

export const numberCellRenderer: TableCellRenderer = ({ cellData }) => {
  return (
    <TableCell align="center" component="div">
      <NumberDisplay value={cellData} options="number" />
    </TableCell>
  )
}

export const percentCellRenderer: TableCellRenderer = ({ cellData }) => {
  return (
    <TableCell align="center" component="div">
      <NumberDisplay value={cellData} options="percent" />
    </TableCell>
  )
}
