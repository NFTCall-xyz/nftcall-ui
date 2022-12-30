import type { FC } from 'react'
import { useMemo } from 'react'
import { Fragment } from 'react'
import { useTranslation } from 'next-i18next'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import TablePagination from '@mui/material/TablePagination'
import FlexRowAlign from 'components/flexbox/FlexRowAlign'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { H6, Paragraph } from 'components/Typography'

import PCTable from './PCTable'
import MobileTable from './MobileTable'
import type { BasicTableProps } from './types'

const BasicTable: FC<BasicTableProps> = (props) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const noData = useMemo(() => !props.data || !props.data.length, [props.data])

  return (
    <Fragment>
      {matches ? <PCTable {...props} /> : <MobileTable {...props} />}
      {noData && (
        <Box display="flex" justifyContent="center" alignItems="center" height={100}>
          <H6 color="text.disabled">{t('table.noData')}</H6>
        </Box>
      )}
      {props.pagination && (
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          component="div"
          count={props.pagination.count}
          rowsPerPage={props.pagination.rowsPerPage}
          page={props.pagination.page}
          onPageChange={props.pagination.onPageChange}
          onRowsPerPageChange={props.pagination.onRowsPerPageChange}
        />
      )}
      {!noData && !props.pagination && props.loadMore && (
        <FlexRowAlign paddingTop={2}>
          {props.loadMore.end ? (
            <Paragraph color="text.secondary">{t('table.noMoreData')}</Paragraph>
          ) : (
            <Button disabled={props.loadMore.disabled} onClick={props.loadMore.onLoadMore}>
              {t('table.loadMore')}
            </Button>
          )}
        </FlexRowAlign>
      )}
    </Fragment>
  )
}

export default BasicTable
