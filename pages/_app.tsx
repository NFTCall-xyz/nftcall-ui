import type { MyAppProps } from 'app'
import App from 'app'
import DomainsProvider from 'domains'
import 'rc-image/assets/index.css'
import { Provider as StoreProvider } from 'react-redux'
import 'simplebar-react/dist/simplebar.min.css'
import store from 'store'
import 'styles/global.css'

import CacheProvider from 'app/emotion'
import { appWithTranslation, useI18nHMR } from 'app/i18n'

import { initChartjs } from 'lib/chartjs'
import 'lib/toastify/styles.css'

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
