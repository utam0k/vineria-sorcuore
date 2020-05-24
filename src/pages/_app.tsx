import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';

import { customTheme } from '../theme';
import { Notification } from '../organisms/Notification/Notification';
import { Footer } from '../organisms/Footer/Footer';
import { Notice } from '../models/notice';

import useSWR from 'swr';
import fetch from 'unfetch';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function MyApp({ Component, pageProps }: AppProps) {
  const { data: notices } = useSWR<Notice[]>(process.env.noticeUrl || '', fetcher);

  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }

          body {
            font-family: 'Questrial', 'Libre Baskerville', 'M PLUS 1p', sans-serif;
            background-color: #fafafa;
            overflow-x: hidden;
          }
        `}
      />
      {notices &&
        notices.map((notice, i) => <Notification key={i} desc={notice.name} link={notice.link} status={notice.type} />)}
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
