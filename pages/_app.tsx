import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../styles/global';
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Wiser Front Challenge</title>
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
