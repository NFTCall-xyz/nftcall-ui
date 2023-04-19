import { isSameDay } from 'date-fns'
import { useWallet } from 'domains'
import { cloneDeep } from 'lodash'
import type { MouseEvent } from 'react'
import { useEffect } from 'react'
import { useMemo, useRef, useState } from 'react'
import { useImmer } from 'use-immer'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import { DAY, getCurrentTimestamp, getTimestamp } from 'app/constant'
import { usePost } from 'app/hooks/request'
import { safeGet } from 'app/utils/get'

import { useCallPoolDetails } from 'domains/data'
import { useMath } from 'domains/utils'

import { toBN } from 'lib/math'

import { getFloorPriceTrends } from './request'
import type { FloorPriceTrends, FloorPriceTrendsChartProps } from './types'

const DayButtonList = [7, 14, 30, 90]
const useDayButton = () => {
  const [value, setValue] = useState(7)
  return {
    value,
    onChange: (event: MouseEvent<HTMLElement>, newValue: number) => {
      if (!newValue) return
      setValue(newValue)
    },
    list: DayButtonList,
  }
}

export const useChart = () => {
  const { NF } = useMath()
  const lineChart = useRef({ width: 0, height: 0, gradient: undefined })
  const theme = useTheme()
  const dayButton = useDayButton()
  const { callPool } = useCallPoolDetails()
  const { chainId } = useWallet()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const { post, cancel, loading } = usePost(getFloorPriceTrends)
  const [sourceData, setSourceData] = useImmer<FloorPriceTrends[]>([])

  useEffect(() => {
    const endTimestamp = getCurrentTimestamp()
    post({
      chainId,
      NFTAddress: callPool.address.NFT,
      startTimestamp: endTimestamp - getTimestamp(90 * DAY),
      endTimestamp,
    }).then((data) => setSourceData(() => data))

    return () => {
      cancel()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chainId, callPool.address.NFT])

  const data = useMemo(() => {
    if (!sourceData.length) return []
    const getMapData = () => {
      const returnValue = cloneDeep(sourceData)
      const { length } = returnValue
      if (length < dayButton.value) return returnValue
      const startIndex = length - dayButton.value
      return returnValue.slice(startIndex, length)
    }

    const returnValue = getMapData()

    const targetDate = returnValue[returnValue.length - 1].createTime

    if (isSameDay(targetDate, new Date())) {
      returnValue[returnValue.length - 1].vol = toBN(callPool.nftOracle.vol)
      returnValue[returnValue.length - 1].floorPrice = callPool.nftOracle.price
    } else {
      returnValue.push({
        createTime: targetDate + DAY,
        floorPrice: callPool.nftOracle.price,
        vol: toBN(callPool.nftOracle.vol),
      } as any)
    }

    return returnValue.map(({ createTime, floorPrice, vol }) => ({ x: createTime, floorPrice, vol }))
  }, [callPool.nftOracle.price, callPool.nftOracle.vol, dayButton.value, sourceData])

  const change24 = useMemo(() => {
    return safeGet(() => data[data.length - 1].floorPrice.div(data[data.length - 2].floorPrice).minus(1)) || toBN(0)
  }, [data])

  const props = useMemo(
    () =>
      ({
        height: matches ? 300 : 100,
        data: {
          datasets: [
            {
              label: 'FloorPrice',
              data: data.map((i) => ({ ...i, y: i.floorPrice })),
              tension: 0.3,
              backgroundColor: (context) => {
                const chart = context.chart
                const { ctx, chartArea } = chart
                if (!chartArea) return null
                const chartWidth = chartArea.right - chartArea.left
                const chartHeight = chartArea.bottom - chartArea.top
                if (!chartWidth) return null
                const { width, height } = lineChart.current
                let { gradient } = lineChart.current
                if (width !== chartWidth || height !== chartHeight) {
                  gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top)
                  gradient.addColorStop(0, 'rgb(92, 225, 230, 0)')
                  gradient.addColorStop(0.5, 'rgba(92, 225, 230, 0.1)')
                  gradient.addColorStop(1, 'rgba(92, 225, 230, 0.2)')
                  lineChart.current = {
                    width: chartWidth,
                    height: chartHeight,
                    gradient,
                  }
                }
                return gradient
              },
              fill: 'start',
              borderColor: theme.palette.primary.main,
              pointBackgroundColor: theme.palette.primary.main,
              pointHoverRadius: 6,
              pointHoverBorderColor: '#fff',
              pointHoverBorderWidth: 2,
              yAxisID: 'y',
            },
            {
              label: 'Volatility',
              data: data.map((i) => ({ ...i, y: i.vol })),
              tension: 0.3,
              fill: 'start',
              borderColor: theme.palette.secondary.main,
              pointBackgroundColor: theme.palette.secondary.main,
              pointHoverRadius: 6,
              pointHoverBorderColor: '#fff',
              pointHoverBorderWidth: 2,
              yAxisID: 'y1',
            },
          ],
        },
        options: {
          interaction: {
            intersect: false,
            mode: 'index',
          },
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  switch (context.dataset.label) {
                    case 'FloorPrice':
                      return `${context.dataset.label}: ${context.parsed.y.toFixed(2)} ETH`
                    case 'Volatility':
                      return `${context.dataset.label}: ${NF.format(context.parsed.y, NF.options('percent'))}`
                  }
                },
                title: (context) => {
                  return `${context[0].label.split(',').slice(0, -1)}`
                },
              },
            },
          },
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
              },
              ticks: {
                color: theme.palette.text.secondary,
              },
              grid: {
                display: false,
              },
            },
            y: {
              position: 'left',
              grace: '15%',
              grid: {
                display: true,
                color: theme.palette.grey[50],
              },
              ticks: {
                color: theme.palette.text.secondary,
                padding: matches ? 0 : 20,
              },
            },
            y1: {
              position: 'right',
              grace: '15%',
              grid: {
                display: true,
                color: theme.palette.grey[50],
              },
              ticks: {
                callback: (value) => NF.format(value, NF.options('percent')),
                color: theme.palette.text.secondary,
                padding: matches ? 0 : 20,
              },
            },
          },
        },
      } as FloorPriceTrendsChartProps),
    [
      matches,
      data,
      theme.palette.primary.main,
      theme.palette.secondary.main,
      theme.palette.text.secondary,
      theme.palette.grey,
      NF,
    ]
  )

  return { props, loading, dayButton, change24, currentFloorPrice: callPool.nftOracle.price }
}
