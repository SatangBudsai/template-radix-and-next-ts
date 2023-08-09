import { ReactElement } from 'react';
import Nprogress from '@/components/third-party/nprogress'
import '@/styles/globals.css'

//SetUp Store redux
import store from '@/redux/store';
import { Provider } from "react-redux";

//Use React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

import ProviderAuth from '@/providers/auth';
import { AppPropsWithLayout } from '@/types/layout/AppPropsWithLayout';
import { ThemeProvider } from '@/components/ui/theme-provider';


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Nprogress>
            <ProviderAuth>
              {getLayout(<Component {...pageProps} />)}
            </ProviderAuth>
          </Nprogress>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>

  )
}
