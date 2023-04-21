import { useApp } from 'app'
import type { FC } from 'react'
import { Fragment } from 'react'

import Header from './Header'
import Card from './display/card'
import List from './display/list'

const CallPools: FC = () => {
  const { setting } = useApp()

  return (
    <Fragment>
      <Header />
      {setting.displayMode === 'list' ? <List /> : <Card />}
    </Fragment>
  )
}

export default CallPools
