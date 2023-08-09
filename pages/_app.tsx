import { ReactElement } from 'react';
import Nprogress from '@/components/third-party/nprogress'
import '@/styles/globals.css'

//SetUp Store redux
import { Provider } from "react-redux";
import store from '@/redux/store';

//Use React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: Infinity,
    },
  },
}
);

import { AppPropsWithLayout } from '@/types/layout/AppPropsWithLayout';
import ThemeProvider from '@/providers/themes';
import AuthProvider from '@/providers/auth';

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Nprogress>
            <AuthProvider>
              {getLayout(<Component {...pageProps} />)}
            </AuthProvider>
          </Nprogress>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>

  )
}
