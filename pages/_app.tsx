import store from 'store'
import { Provider as StoreProvider } from 'react-redux'
import type { MyAppProps } from 'app'
import App from 'app'
import DomainsProvider from 'domains'

import CacheProvider from 'app/emotion'
import { appWithTranslation, useI18nHMR } from 'app/i18n'
import { initChartjs } from 'lib/chartjs'

import 'lib/toastify/styles.css'
import 'rc-image/assets/index.css'
import 'styles/global.css'

initChartjs()

function MainApp(props: MyAppProps): JSX.Element {
  useI18nHMR()
  return (
    <CacheProvider emotionServerCache={props.emotionCache}>
      <StoreProvider store={store}>
        <DomainsProvider>
          <App {...props} />
        </DomainsProvider>
      </StoreProvider>
    </CacheProvider>
  )
}

export default appWithTranslation(MainApp)
