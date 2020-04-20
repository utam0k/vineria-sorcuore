import React from 'react';
import Head from 'next/head';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Header } from '../../components/Header/Header';

export const Layout: React.FC = ({ children }) => (
  <>
    <Head>
      <title>Vineria Sorcuor</title>
      <meta
        name="description"
        content="Vineria Sorcuor . ヴィネリアソルクオーレ. . イタリア語でSORRISO 笑顔 CUORE 心 かけ合わせて作った造語それがソルクオーレです。 心を込めて笑顔になれる楽しい本格イタリアンをお客様にお届けします。ぜひ、素敵な時間をお過ごしください。"
      ></meta>
    </Head>
    <ThemeProvider>
      <CSSReset />
      <Header />
      {children}
    </ThemeProvider>
  </>
);
