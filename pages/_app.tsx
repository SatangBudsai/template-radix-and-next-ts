import Nprogress from '@/components/nprogress'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
//SetUp Store redux
import store from '@/redux/store';
import { Provider } from "react-redux";
//Use React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
const queryClient = new QueryClient();

import { AppPropsWithLayout } from './types/layout/AppPropsWithLayout';
import ProviderAuth from '@/providers/auth';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Nprogress>
          <ProviderAuth>
            {getLayout(<Component {...pageProps} />)}
          </ProviderAuth>
        </Nprogress>
      </QueryClientProvider>
    </Provider>

  )
}
