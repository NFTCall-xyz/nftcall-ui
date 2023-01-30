import UI from 'UI/Home'
import type { GetStaticProps, NextPage } from 'next'

import { withStaticTranslations } from 'app/i18n/hoc'

export const getStaticProps: GetStaticProps = withStaticTranslations((props) => ({ props }), {
  namespaces: ['home'],
})

const Page: NextPage = () => {
  return <UI />
}

export default Page
