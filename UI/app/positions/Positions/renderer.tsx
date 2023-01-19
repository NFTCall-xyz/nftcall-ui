import TableCell from '@mui/material/TableCell'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import Box from '@mui/material/Box'

import PositionStatus from 'domains/data/position/components/PositionStatus'
import NFTCell from 'domains/data/nft/components/NFTCell'
import type { Position } from 'domains/data/position/types'
import { PositionStatus as PositionStatusType } from 'domains/data/position/types'
import { useTranslation } from 'next-i18next'
import { format } from 'date-fns'
import { Paragraph } from 'components/Typography'
import RiseOrFall from 'lib/math/components/RiseOrFall'
import NumberDisplay from 'lib/math/components/NumberDisplay'
import TokenIcon from 'lib/protocol/components/TokenIcon'

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

export const nftCellRenderer = ({ rowData }: TableCellProps) => {
  return (
    <TableCell align="center" component="div">
      <NFTCell {...{ nft: rowData, sx: { width: 40, height: 40 } }} />
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

export const pnlCellRenderer = ({ rowData: { PnL, PnLInPercent } }: TableCellProps) => {
  if (PnL.isZero()) {
    return (
      <TableCell align="center" component="div">
        <NumberDisplay value={PnL} options="number" numberFormatOptions={{ signDisplay: 'always' }} />
      </TableCell>
    )
  }
  return (
    <TableCell align="center" component="div">
      <Stack spacing={1}>
        <RiseOrFall value={PnL}>
          <Stack spacing={0.5} direction="row" alignItems="center">
            <TokenIcon symbol="ETH" sx={{ width: 14, height: 14 }} />
            <NumberDisplay value={PnL} options="number" numberFormatOptions={{ signDisplay: 'always' }} />
          </Stack>
        </RiseOrFall>
        <RiseOrFall value={PnLInPercent}>
          <NumberDisplay value={PnLInPercent} options="percent" numberFormatOptions={{ signDisplay: 'always' }} />
        </RiseOrFall>
      </Stack>
    </TableCell>
  )
}

type PositionDateProps = {
  position: Position
}
const PositionNotExercisableDate: FC<PositionDateProps> = ({ position: { exerciseTime, endTime } }) => {
  const { t } = useTranslation('app-positions', { keyPrefix: 'table' })
  return (
    <TableCell align="center" component="div">
      <Stack spacing={1}>
        <Tooltip title={t('exercisableDate')} placement="top">
          <Box>
            <Paragraph fontSize={14} color="text.secondary">
              {format(exerciseTime, 'MMM dd hh:mm')}
            </Paragraph>
          </Box>
        </Tooltip>
        <Tooltip title={t('expiryDate')}>
          <Box>
            <Paragraph fontSize={14} color="text.secondary">
              {format(endTime, 'MMM dd hh:mm')}
            </Paragraph>
          </Box>
        </Tooltip>
      </Stack>
    </TableCell>
  )
}
const PositionExercisedDate: FC<PositionDateProps> = ({ position: { updateTimestamp } }) => {
  const { t } = useTranslation('app-positions', { keyPrefix: 'table' })
  return (
    <TableCell align="center" component="div">
      <Stack spacing={1}>
        <Tooltip title={t('exercisedDate')}>
          <Box>
            <Paragraph fontSize={14} color="text.secondary">
              {format(updateTimestamp, 'MMM dd hh:mm')}
            </Paragraph>
          </Box>
        </Tooltip>
      </Stack>
    </TableCell>
  )
}
const PositionExpiredDate: FC<PositionDateProps> = ({ position: { endTime } }) => {
  const { t } = useTranslation('app-positions', { keyPrefix: 'table' })
  return (
    <TableCell align="center" component="div">
      <Stack spacing={1}>
        <Tooltip title={t('expiryDate')}>
          <Box>
            <Paragraph fontSize={14} color="text.secondary">
              {format(endTime, 'MMM dd hh:mm')}
            </Paragraph>
          </Box>
        </Tooltip>
      </Stack>
    </TableCell>
  )
}

export const positionDateCellRenderer = (props: TableCellProps) => {
  const {
    rowData: { status },
  } = props
  if (status === PositionStatusType.NotExercisable) {
    return <PositionNotExercisableDate position={props.rowData} />
  } else if (status === PositionStatusType.Exercised) {
    return <PositionExercisedDate position={props.rowData} />
  } else {
    return <PositionExpiredDate position={props.rowData} />
  }
}
