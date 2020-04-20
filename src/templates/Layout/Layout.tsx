import React from 'react';
import Head from 'next/head';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Header } from '../../organisms/Header/Header';
import { Global, css } from '@emotion/core';

export const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      <title>Vineria Sorcuor</title>
      <meta
        name="description"
        content="イタリア語で SORRISO (笑顔) CUORE (心)。かけ合わせて作った造語それがソルクオーレです。\n心を込めて笑顔になれる楽しい本格イタリアンをお客様にお届けします。ぜひ、素敵な時間をお過ごしください。"
      ></meta>
    </Head>
    <ThemeProvider>
      <CSSReset />
      <Global
        styles={css`
          body {
            font-family: 'Libre Baskerville', 'Kosugi Maru', sans-serif;
          }
        `}
      />
      <Header />
      {children}
    </ThemeProvider>
  </>
);
