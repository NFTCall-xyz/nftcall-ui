import { format } from 'date-fns'
import { useTranslation } from 'next-i18next'

import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import TableCell from '@mui/material/TableCell'
import Tooltip from '@mui/material/Tooltip'

import { Paragraph } from 'components/Typography'

import NFTCell from 'domains/data/nft/components/NFTCell'
import PositionStatus from 'domains/data/position/components/PositionStatus'
import type { Position } from 'domains/data/position/types'
import { PositionStatus as PositionStatusType } from 'domains/data/position/types'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'

type TableCellProps = {
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
      <TableCell align="center" component="div" sx={{ '& span': { fontSize: 14 } }}>
        <NumberDisplay value={PnL} options="number" numberFormatOptions={{ signDisplay: 'always' }} />
      </TableCell>
    )
  }
  return (
    <TableCell align="center" component="div" sx={{ '& span': { fontSize: 14 } }}>
      <Stack spacing={0.5}>
        <RiseOrFall value={PnL}>
          <Stack spacing={0.5} direction="row" alignItems="center">
            {/* <TokenIcon symbol="ETH" sx={{ width: 14, height: 14 }} /> */}
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
const PositionNotExercisableDate: FC<PositionDateProps> = ({ position: { exerciseTime } }) => {
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
        <span>-</span>
      </Stack>
    </TableCell>
  )
}
const PositionExercisedDate: FC<PositionDateProps> = ({ position: { updateTimestamp } }) => {
  const { t } = useTranslation('app-positions', { keyPrefix: 'table' })
  return (
    <TableCell align="center" component="div">
      <Stack spacing={1}>
        <span>-</span>
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
const PositionExpiredDate: FC<PositionDateProps> = ({ position: { endTime, createTimestamp } }) => {
  const { t } = useTranslation('app-positions', { keyPrefix: 'table' })
  return (
    <TableCell align="center" component="div">
      <Stack spacing={1}>
        <Tooltip title={t('createdDate')}>
          <Box>
            <Paragraph fontSize={14} color="text.secondary">
              {format(createTimestamp, 'MMM dd hh:mm')}
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

export const positionDate1CellRenderer = (props: TableCellProps) => {
  const {
    rowData: { status },
  } = props
  if (status === PositionStatusType.NotExercisable) {
    return <PositionNotExercisableDate position={props.rowData} />
  } else if (status === PositionStatusType.Exercised) {
    return <PositionExercisedDate position={props.rowData} />
  } else {
    return (
      <TableCell align="center" component="div">
        <Stack spacing={1}>
          <span>-</span>
          <span>-</span>
        </Stack>
      </TableCell>
    )
  }
}

export const positionDate2CellRenderer = (props: TableCellProps) => {
  return <PositionExpiredDate position={props.rowData} />
}

const PositionDate1Header = () => {
  const { t } = useTranslation('app-positions', { keyPrefix: 'table' })
  return (
    <Stack spacing={0}>
      <span>{t('exercisableDate')}</span>
      <span>{'/' + t('exercisedDate')}</span>
    </Stack>
  )
}
export const positionDate1HeaderRenderer = () => {
  return (
    <TableCell align="center" component="div" variant="head">
      <PositionDate1Header />
    </TableCell>
  )
}

const PositionDate2Header = () => {
  const { t } = useTranslation('app-positions', { keyPrefix: 'table' })
  return (
    <Stack spacing={0}>
      <span>{t('createdDate')}</span>
      <span>{'/' + t('expiryDate')}</span>
    </Stack>
  )
}
export const positionDate2HeaderRenderer = () => {
  return (
    <TableCell align="center" component="div" variant="head">
      <PositionDate2Header />
    </TableCell>
  )
}
