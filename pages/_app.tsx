import type { AppProps } from 'next/app';
import  Layout  from '@/components/Layout';
import { Poppins, Oswald } from '@next/font/google';
import '@/styles/base/global.scss';

const poppins = Poppins({
  weight: '400',
});

const oswald = Oswald({
  weight: '700',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
