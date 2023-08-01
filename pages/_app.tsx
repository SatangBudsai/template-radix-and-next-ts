import Nprogress from '@/components/nprogress'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
//SetUp Store redux
import store from '@/redux/store';
import { Provider } from "react-redux";
//Use React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Nprogress>
          <Component {...pageProps} />
        </Nprogress>
      </QueryClientProvider>
    </Provider>

  )
}
