import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';
import { customTheme } from '../theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }

          body {
            font-family: 'Libre Baskerville', 'M PLUS 1p', sans-serif;
            background-color: #fafafa;
            overflow-x: hidden;
          }
        `}
      />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
