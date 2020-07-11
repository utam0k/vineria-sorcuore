import React from 'react';
import { Link, Text, Heading, Box, useTheme } from '@chakra-ui/core';

import { Layout } from '../templates/Layout/Layout';

export const PrivacyPolicyPage = () => {
  const theme = useTheme();
  return (
    <Layout>
      <Box maxWidth={theme.sizes['4xl']} paddingBottom={theme.space[32]} paddingX={theme.space[8]} margin="auto">
        <Heading as="h1" textAlign="center" marginY={[theme.space[4], theme.space[4], theme.space[4], theme.space[8]]}>
          プライバシーポリシー
        </Heading>
        <Text whiteSpace="pre-wrap" overflowWrap="break-word" wordBreak="break-all">
          本文書は、当サイト(ヴィネリアソルクオーレ)における個人情報の保護およびその適切な取り扱いについての方針を示したものです。
        </Text>
        <Heading
          as="h2"
          fontSize="2xl"
          textAlign="left"
          marginY={[theme.space[4], theme.space[4], theme.space[4], theme.space[8]]}
        >
          当サイトが利用しているアクセス解析ツールに関して
        </Heading>
        <Text whiteSpace="pre-wrap" overflowWrap="break-word" wordBreak="break-all">
          当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。
          このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。
          このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
          この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
          この規約に関して、詳しくは
          <Link color="teal.500" href="https://marketingplatform.google.com/about/analytics/terms/jp/">
            ここ
          </Link>
          をクリックしてください。
        </Text>
      </Box>
    </Layout>
  );
};

export default PrivacyPolicyPage;
