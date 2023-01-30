import NotFound from 'UI/views/NotFound'
import type { GetStaticProps } from 'next'

import { withStaticTranslations } from 'app/i18n/hoc'

export const getStaticProps: GetStaticProps = withStaticTranslations((props) => ({ props }), {
  namespaces: [],
})

const FourOFourPage = (): JSX.Element => {
  return <NotFound />
}

export default FourOFourPage
