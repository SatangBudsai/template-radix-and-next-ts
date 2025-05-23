import { ReactElement } from 'react';
import '@/styles/globals.css'

//SetUp Store redux
import { Provider } from "react-redux";
import store from '@/redux/store';

import { AppPropsWithLayout } from '@/types/layout/AppPropsWithLayout';
import NprogressProvider from '@/providers/nprogress'
import ThemesProvider from '@/providers/themes';
import AuthProvider from '@/providers/auth';
import ReactQueryProvider from '@/providers/react-query';
import DateProvider from '@/providers/date';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);

  return (
    <ReactQueryProvider>
      <Provider store={store}>
        <DateProvider>
          <ThemesProvider >
            <NprogressProvider>
              <AuthProvider>
                {getLayout(<Component {...pageProps} />)}
              </AuthProvider>
            </NprogressProvider>
          </ThemesProvider>
        </DateProvider>
      </Provider>
    </ReactQueryProvider>
  )
}
