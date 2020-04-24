import React from 'react';
import Head from 'next/head';
import { Header } from '../../organisms/Header/Header';

type Props = React.ComponentProps<typeof Header>;

export const Layout: React.FC<Props> = ({ children, ...props }) => (
  <>
    <Head>
      <title>Vineria Sorcuor</title>
      <meta
        name="description"
        content="イタリア語で SORRISO (笑顔) CUORE (心)。かけ合わせて作った造語それがソルクオーレです。\n心を込めて笑顔になれる楽しい本格イタリアンをお客様にお届けします。ぜひ、素敵な時間をお過ごしください。"
      ></meta>
    </Head>
    <>
      <Header {...props} />
      {children}
    </>
  </>
);
