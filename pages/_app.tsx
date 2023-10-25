import { wrapper } from '@/app/store'
import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

export default function App({ Component, ...rest }: any) {
  const { store, props } = wrapper.useWrappedStore(rest)
  return <Provider store={store}>
    <Layout>

      <Component {...props.pageProps} />
    </Layout>
  </Provider>
}
