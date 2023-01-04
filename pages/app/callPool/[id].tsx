import UI from 'UI/app/callPool'

import type { GetStaticPaths, GetStaticProps } from 'next'
import type { FC } from 'react'
import { withStaticTranslations } from 'app/i18n/hoc'
// import { usePagePropsEffect } from 'domains/data/portfolioDetails/application/portfolioId'

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

  locales.forEach((locale) => {
    paths.push({
      params: { id: '0xc629d0C48D82dbc9351e7b2c4C272c49F023EB5d' },
      locale,
    })
  })

  return {
    paths,
    fallback: 'blocking',
  }
}

const Page: FC = (props) => {
  // usePagePropsEffect(props)
  return <UI />
}

export default Page
