import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { useMemo } from 'react'
import { Fragment } from 'react'

import Button from '@mui/material/Button'
import TablePagination from '@mui/material/TablePagination'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { H6, Paragraph } from 'components/Typography'
import FlexRowAlign from 'components/flexbox/FlexRowAlign'

import MobileTable from './MobileTable'
import PCTable from './PCTable'
import type { BasicTableProps } from './types'

const BasicTable: FC<BasicTableProps> = (props) => {
  const { t } = useTranslation()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const noData = useMemo(() => !props.data || !props.data.length, [props.data])
  const { loading } = props

  return (
    <Fragment>
      {matches ? <PCTable {...props} /> : <MobileTable {...props} />}
      {loading && (
        <FlexRowAlign paddingTop={2} height={100}>
          <H6 color="text.disabled">{t('table.loading')}</H6>
        </FlexRowAlign>
      )}
      {!loading && noData && (
        <FlexRowAlign paddingTop={2} height={100}>
          <H6 color="text.disabled">{t('table.noData')}</H6>
        </FlexRowAlign>
      )}
      {!loading && props.pagination && (
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
      {!loading && !noData && !props.pagination && props.loadMore && (
        <FlexRowAlign paddingTop={2}>
          {props.loadMore.end ? (
            <Paragraph color="text.disabled">{t('table.noMoreData')}</Paragraph>
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
