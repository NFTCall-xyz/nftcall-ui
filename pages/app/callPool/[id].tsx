import UI from 'UI/app/callPool'

import type { GetStaticPaths, GetStaticProps } from 'next'
import type { FC } from 'react'
import { withStaticTranslations } from 'app/i18n/hoc'
import { MARKETS } from 'lib/protocol/market'
import { useCallPoolIdEffect } from 'domains/data/callPoolDetails/application/callPoolId'

export const getStaticProps: GetStaticProps = withStaticTranslations(
  (props) => {
    const { id } = props.params
    return {
      props: {
        ...props,
        id: typeof id === 'string' ? id : id[0],
      },
    }
  },
  {
    namespaces: ['app-callpool'],
  }
)

export const getStaticPaths: GetStaticPaths = ({ locales }) => {
  const paths = [] as any
  const ids: string[] = []
  Object.values(MARKETS).forEach((market) => {
    Object.values(market.markets).forEach((callPool) => {
      ids.push(callPool.CallPoolForTest)
    })
  })

  locales.forEach((locale) => {
    ids.forEach((id) => {
      paths.push({
        params: { id },
        locale,
      })
    })
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

const Page: FC = (props) => {
  useCallPoolIdEffect(props)
  return <UI />
}

export default Page
