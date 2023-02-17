import UI from 'UI/app/callPool'
import type { GetStaticPaths, GetStaticProps } from 'next'
import type { FC } from 'react'

import { withStaticTranslations } from 'app/i18n/hoc'

import { useCallPoolIdEffect } from 'domains/data/callPoolDetails/application/callPoolId'

import { MARKETS } from 'lib/protocol/market'

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
    Object.values(market.markets).forEach((callPool: any) => {
      if (callPool.CallPool) ids.push(callPool.CallPool)
      if (callPool.CallPoolForTest) ids.push(callPool.CallPoolForTest)
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
