import type { AppProps } from 'next/app';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import GlobalStyle from '../components/globalstyles';
import { Layout } from '@/components/index';
import { Poppins, Oswald } from '@next/font/google';

const theme: DefaultTheme = {
  colors: {
    primary: 'rgb(29, 29, 31)',
    secondary: 'rgb(253, 97, 21)',
    tertiary: 'rgb(248, 249, 252)',
  },
  fonts: {
    body: 'Poppins',
    heading: 'Vaulto',
  },
};

const poppins = Poppins({
  weight: '400',
});

const oswald = Oswald({
  weight: '700',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  );
}
