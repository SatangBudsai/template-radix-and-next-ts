import { ReactElement } from 'react';
import '@/styles/globals.css'

//SetUp Store redux
import { Provider } from "react-redux";
import store from '@/redux/store';

import { AppPropsWithLayout } from '@/types/layout/AppPropsWithLayout';
import Nprogress from '@/providers/nprogress'
import ThemesProvider from '@/providers/themes';
import AuthProvider from '@/providers/auth';
import ReactQuery from '@/providers/react-query';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);
  return (
    <Provider store={store}>
      <ReactQuery>
        <ThemesProvider >
          <Nprogress>
            <AuthProvider>
              {getLayout(<Component {...pageProps} />)}
            </AuthProvider>
          </Nprogress>
        </ThemesProvider>
      </ReactQuery>
    </Provider>

  )
}
