import type { FC } from 'react'
import { Fragment, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import Card from '@mui/material/Card'
import Stack from '@mui/material/Stack'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import { styled } from '@mui/material/styles'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { H5, Paragraph } from 'components/Typography'
import FlexRowAlign from 'components/flexbox/FlexRowAlign'

import NumberDisplay from 'lib/math/components/NumberDisplay'
import RiseOrFall from 'lib/math/components/RiseOrFall'
import TokenIcon from 'lib/protocol/components/TokenIcon'

import Chart from './Chart'
import type { FloorPriceTrendsProps } from './types'
import { useChart } from './useChart'
import { CircularProgress } from '@mui/material'

const ROOT = styled(Card)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: '10px',
  flex: 8,
  backgroundColor: 'transparent',
  border: 'solid 1px',
  borderColor: theme.palette.divider,
}))
const SubTitle = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: 'center';
`
const Left = styled(Stack)`
  align-items: flex-end;
`

const Right = styled('div')``

const FloorPriceTrends: FC<FloorPriceTrendsProps> = () => {
  const { t } = useTranslation('app-callpool', { keyPrefix: 'floorPriceTrends' })

  const chart = useChart()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  const left = useMemo(
    () => (
      <Left spacing={4} direction="row">
        <Stack spacing={1}>
          <H5 color="text.secondary" fontWeight={400}>
            {t('floorPrice')}
          </H5>
          <Paragraph fontWeight={600} fontSize={24}>
            <Stack spacing={0.5} direction="row" alignItems="center">
              <TokenIcon symbol="ETH" sx={{ width: 16, height: 16 }} />
              <NumberDisplay value={chart.currentFloorPrice} options="number" />
            </Stack>
          </Paragraph>
        </Stack>
        <Stack spacing={1}>
          <H5 color="text.secondary" fontWeight={400}>
            {t('change24h')}
          </H5>

          <RiseOrFall value={chart.change24}>
            <Paragraph fontWeight={600} fontSize={24}>
              <Stack spacing={0.5} direction="row" alignItems="center">
                <NumberDisplay value={chart.change24} abbreviate={{}} numberFormatOptions={{ signDisplay: 'always' }} options='percent' />
              </Stack>
            </Paragraph>
          </RiseOrFall>
        </Stack>
      </Left>
    ),
    [chart.change24, chart.currentFloorPrice, t]
  )

  const right = useMemo(
    () => (
      <Right>
        <ToggleButtonGroup color="primary" value={chart.dayButton.value} exclusive onChange={chart.dayButton.onChange}>
          {chart.dayButton.list.map((day) => (
            <ToggleButton value={day} key={day} size="small">
              {day} {t('days')}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Right>
    ),
    [chart.dayButton.list, chart.dayButton.onChange, chart.dayButton.value, t]
  )

  return (
    <ROOT>
      <Stack spacing={2}>
        {matches ? (
          <SubTitle>
            {left}
            {right}
          </SubTitle>
        ) : (
          <Fragment>
            {left}
            {right}
          </Fragment>
        )}
        {chart.loading ? (
          <FlexRowAlign paddingTop={2} height={100}>
            <CircularProgress />
          </FlexRowAlign>
        ) : (
          <Chart {...chart.props} />
        )}
      </Stack>
    </ROOT>
  )
}

export default FloorPriceTrends
