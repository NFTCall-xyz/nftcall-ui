import UI from 'UI/dev'
import NotFound from 'UI/views/NotFound'
import type { GetStaticProps, NextPage } from 'next'

import { withStaticTranslations } from 'app/i18n/hoc'

export const getStaticProps: GetStaticProps = withStaticTranslations((props) => ({ props }), {
  namespaces: [],
})

const Page: NextPage = () => {
  return <UI />
}

export default __DEV__ ? Page : () => <NotFound />
