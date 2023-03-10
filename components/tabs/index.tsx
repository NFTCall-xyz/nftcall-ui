import { useMemo } from 'react'
import { useImmer } from 'use-immer'

import { TabContext, TabList, TabPanel } from '@mui/lab'
import Grid from '@mui/material/Grid'
import Tab from '@mui/material/Tab'
import { styled } from '@mui/material/styles'

import type { FCC } from 'app/types'

import FlexBetween from 'components/flexbox/FlexBetween'

const StyledTabList = styled(TabList)(({ theme }) => ({
  [theme.breakpoints.down(780)]: {
    width: '100%',
    marginBottom: 20,
    '& .MuiTabs-flexContainer': { justifyContent: 'center' },
  },
  [theme.breakpoints.up('sm')]: {
    '& .MuiTabs-flexContainer': {
      minWidth: 300,
      justifyContent: 'space-between',
    },
  },
}))
const StyledTab = styled(Tab)(({ theme }) => ({
  fontSize: 14,
  color: theme.palette.text.primary,
}))
const StyledTabPanel = styled(TabPanel)(() => ({ padding: 0 }))

type TabItem = {
  title: string
  children: {
    component: any
    props?: any
  }
}
export type TabsProps = {
  tabs: TabItem[]
  Header?: FCC
  sx?: any
}
const Tabs: FCC<TabsProps> = ({ tabs, Header, sx }) => {
  const [value, setValue] = useImmer('0')
  const tabList = useMemo(
    () => (
      <FlexBetween flexWrap="wrap">
        <StyledTabList
          onChange={(_event, newValue) => {
            setValue(newValue)
          }}
          sx={sx}
        >
          {tabs.map(({ title }, index) => {
            return <StyledTab key={title} label={title} value={index.toString()} />
          })}
        </StyledTabList>
      </FlexBetween>
    ),
    [setValue, sx, tabs]
  )

  return (
    <TabContext value={value}>
      {Header ? <Header>{tabList}</Header> : tabList}
      <Grid container marginTop={2}>
        <Grid item xs={12}>
          {tabs.map(({ title, children }, index) => {
            return (
              <StyledTabPanel key={title} value={index.toString()}>
                <children.component {...(children.props || {})} />
              </StyledTabPanel>
            )
          })}
        </Grid>
      </Grid>
    </TabContext>
  )
}

export default Tabs
