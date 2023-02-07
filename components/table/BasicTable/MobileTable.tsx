import clsx from 'clsx'
import type { FC } from 'react'
import { useEffect } from 'react'
import { Fragment, useMemo } from 'react'
import { useImmer } from 'use-immer'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Collapse from '@mui/material/Collapse'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Table from '@mui/material/Table'
import TableCell from '@mui/material/TableCell'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import { styled } from '@mui/material/styles'

import type { BasicTableProps } from './types'
import { getCellData } from './utils'

const EXPAND_WIDTH = '60px'
const columnsPrimaryNumber = 2

type CollapsibleHeadProps = Pick<BasicTableProps, 'columns'>
type CollapsibleRowProps = Pick<BasicTableProps, 'columns'> & {
  data: any[]
  row: any
  rowIndex: any
}

const CollapsibleHead: FC<CollapsibleHeadProps> = (props) => {
  const columnsPrimary = props.columns.slice(0, columnsPrimaryNumber)

  return (
    <Fragment>
      <Box
        className="ReactVirtualized__Table__headerColumn"
        role="columnheader"
        style={{
          overflow: 'hidden',
          flex: `0 1 ${EXPAND_WIDTH}`,
          minWidth: 50,
        }}
      >
        <TableCell align="center" component="div" variant="head">
          &nbsp;
        </TableCell>
      </Box>
      {columnsPrimary.map((column) => (
        <Box
          key={column.dataKey}
          className="ReactVirtualized__Table__headerColumn"
          role="columnheader"
          style={{
            overflow: 'hidden',
            flex: `0 1 ${column.width}px`,
          }}
        >
          {column.headerRenderer(column)}
        </Box>
      ))}
    </Fragment>
  )
}
const CollapsibleRow: FC<CollapsibleRowProps> = (props) => {
  const [open, setOpen] = useImmer(false)
  const { columns, row, rowIndex, data } = props

  const columnsPrimary = columns.slice(0, columnsPrimaryNumber)
  const columnsSecondary = columns.slice(columnsPrimaryNumber)

  return (
    <Card>
      <TableRow component="div" className={clsx(['ReactVirtualized__Table__row'])} onClick={() => setOpen(!open)}>
        <Box
          className="ReactVirtualized__Table__rowColumn"
          role="gridcell"
          style={{
            overflow: 'hidden',
            flex: `0 1 ${EXPAND_WIDTH}`,
            minWidth: 50,
          }}
        >
          <TableCell align="center" component="div">
            <IconButton aria-label="expand row" size="small">
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
        </Box>
        {columnsPrimary.map((column, columnIndex) => (
          <Box
            key={rowIndex + column.dataKey}
            className="ReactVirtualized__Table__rowColumn"
            role="gridcell"
            style={{
              overflow: 'hidden',
              flex: `0 1 ${column.width}px`,
            }}
          >
            {column.cellRenderer({
              cellData: getCellData(row, column),
              columnData: column,
              columnIndex,
              dataKey: column.dataKey,
              isScrolling: false,
              rowData: row,
              rowIndex,
            })}
          </Box>
        ))}
      </TableRow>
      <TableRow component="div" className="ReactVirtualized__Table__row">
        <Box
          role="gridcell"
          sx={[
            {
              overflow: 'hidden',
              flex: 1,
            },
            data.length - 1 != rowIndex && { borderBottom: 1, borderColor: 'divider' },
          ]}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ padding: 2 }}>
              {columnsSecondary.map((column, columnIndex) => (
                <Grid
                  className="ReactVirtualized__Table__rowColumn secondary"
                  container
                  spacing={2}
                  key={rowIndex + column.dataKey}
                >
                  <Grid item xs={4} className="label">
                    {column.headerRenderer(column)}
                  </Grid>
                  <Grid item xs={8} className="value">
                    {column.cellRenderer({
                      cellData: getCellData(row, column),
                      columnData: column,
                      columnIndex,
                      dataKey: column.dataKey,
                      isScrolling: false,
                      rowData: row,
                      rowIndex,
                    })}
                  </Grid>
                </Grid>
              ))}
            </Box>
          </Collapse>
        </Box>
      </TableRow>
    </Card>
  )
}

const DataFetcher: FC<{
  data: any[]
  rowIndex: any
  row: any
  columns: any[]
  dataFetcher: (data: any) => Promise<any>
}> = ({ data, rowIndex, dataFetcher, row, columns }) => {
  const [rowData, setRowData] = useImmer(row)
  useEffect(() => {
    if (!dataFetcher) {
      setRowData(row)
      return
    } else {
      dataFetcher(row).then((data) => setRowData(data))
    }
  }, [dataFetcher, row, setRowData])

  return (
    <CollapsibleRow
      {...{
        data,
        row: rowData,
        rowIndex,
        columns,
      }}
    />
  )
}

const MobileTable: FC<BasicTableProps> = (props) => {
  const { columns, data, dataFetcher } = props

  const table = useMemo(() => {
    return {
      head: <CollapsibleHead columns={columns} />,
      body:
        data &&
        data.map((row, rowIndex) => (
          <DataFetcher
            key={rowIndex}
            {...{
              data,
              row,
              rowIndex,
              columns,
              dataFetcher,
            }}
          />
        )),
    }
  }, [columns, data, dataFetcher])

  return (
    <ROOT className="table basic-table">
      <Table component={Box}>
        <TableHead component={Box}>
          <TableRow component={Box} className="ReactVirtualized__Table__headerRow">
            {table.head}
          </TableRow>
        </TableHead>
        <Stack spacing={2}>{table.body}</Stack>
      </Table>
    </ROOT>
  )
}

export const ROOT = styled('div')`
  height: 100%;
  width: 100%;
  .MuiTable-root,
  .MuiTableHead-root,
  .MuiTableBody-root {
    display: block;
  }
  .ReactVirtualized__Table__headerRow,
  .ReactVirtualized__Table__rowColumn {
    display: flex;
  }
  .ReactVirtualized__Table__headerRow {
    align-items: center;
  }
  .ReactVirtualized__Table__rowColumn {
    &.secondary {
      align-items: center;
      position: relative;
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        ${({ theme }) => ({
          borderBottom: `1px solid ${theme.palette.divider}`,
          left: theme.spacing(2),
          width: `calc(100% - ${theme.spacing(4)})`,
        })}
      }
      .MuiGrid-item {
        display: flex;
      }
      .label .MuiTableCell-root {
        justify-content: right;
      }
      .value .MuiTableCell-root {
        justify-content: left;
      }
    }
  }
  .MuiTableCell-root {
    display: flex;
    align-items: center;
    box-sizing: border-box;
    flex: 1;
  }

  .MuiTableCell-alignCenter {
    justify-content: center;
  }

  .ReactVirtualized__Table__row {
    display: flex;
    will-change: transform;
  }
`

export default MobileTable
