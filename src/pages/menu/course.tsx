import React from 'react';
import { Text, Heading, Box, useTheme, List, ListItem } from '@chakra-ui/core';

import { Layout } from '../../templates/Layout/Layout';
import { Number } from '../../atoms/Number/Number.component';
import { Section } from '../../organisms/Section/Section';

export const CourseMenuPage = () => {
  const theme = useTheme();
  return (
    <Layout>
      <Box as="header" margin="0 auto" maxWidth={theme.sizes['4xl']}>
        <Heading as="h1" textAlign="center" marginTop={theme.space[8]}>
          コースメニュー
        </Heading>
      </Box>
      <Section
        title="ふるの牛コース"
        image={{
          url:
            'https://lh3.googleusercontent.com/pw/ACtC-3d2m7E-T9tYu3fz2j00ufHyzckVmx1JCY3Y0RMx5w7CvAuOcI-mb7gzlnnvG28FrWJLk1cH9gPAvi2pf2q6m33-AZsySsGNtcYBl9NnChbecfE0d7A6C0VO9YJokUyJ3s-xMCcGMfU9Q-6zPeh5vZpB=w512',
          alt: 'ふるの牛コース',
        }}
      >
        <Text>こだわりの生産者「古野さん」の”ふるの牛”を贅沢に使ったお得なコース。</Text>
        <Text>※２名様～承ります。事前のご予約をお願いいたします。</Text>
        <Text textAlign="right" fontSize="lg">
          ￥<Number>{6000}</Number>
        </Text>
        <List marginTop={theme.space[4]}>
          {[
            { category: '～アミューズ～', name: 'ふるの牛トモサンカクの炙りカルパッチョ　トリュフかけ' },
            { category: '～前菜～', name: 'ふるの牛レバーのヴェネツィア風' },
            { category: '～１皿目のメイン～', name: 'ふるの牛のグリル' },
            { category: '～２皿目のメイン～', name: 'ふるの牛のブラザート　　(赤ワイン煮込み)' },
            { category: '～〆のパスタ～', name: 'ソルクオーレ名物！ボローニャ風ラザニア' },
            { category: '～食後のデザート、お飲み物～' },
          ].map((item, i) => (
            <ListItem
              key={item.name}
              paddingY={theme.space[1]}
              borderTop={i > 0 ? `1px solid ${theme.colors.gray[100]}` : undefined}
            >
              <Text>{item.category}</Text>
              <Text
                as="p"
                fontSize={[theme.fontSizes.xs, theme.fontSizes.xs, theme.fontSizes.md, theme.fontSizes.md]}
                whiteSpace="pre-wrap"
                marginLeft={theme.space[8]}
              >
                {item.name}
              </Text>
            </ListItem>
          ))}
        </List>
      </Section>
      <Box as="section" paddingX={theme.space[8]} paddingY={theme.space[24]} backgroundColor={theme.colors.green[700]}>
        <Box maxWidth={theme.sizes['5xl']} marginX="auto">
          <Heading
            textAlign="center"
            fontSize={[theme.fontSizes['3xl'], theme.fontSizes['3xl'], theme.fontSizes['5xl'], theme.fontSizes['5xl']]}
            color={theme.colors.white}
            fontWeight="normal"
            marginBottom={theme.space[4]}
          >
            女子会コース飲み放題付！
          </Heading>
          <Text color={theme.colors.white}>男性のお客様もOK！ （＋￥2000頂戴します。）</Text>
          <Text color={theme.colors.white}>※３名様～承ります。１日前のご予約をお願いいたします。</Text>
          <Text textAlign="right" color={theme.colors.white} fontSize="lg">
            ￥<Number>{4900}</Number>
          </Text>
          <List marginTop={theme.space[4]}>
            {[
              { name: '～アミューズ～' },
              { name: '～豪華前菜盛り合わせ～' },
              { name: '～お任せパスタ～' },
              { name: '～当店名物ラザニア 又は ポークのグリル～' },
              { name: '～デザート 食後のお飲み物～' },
            ].map((item, i) => (
              <ListItem
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                key={item.name}
                paddingX={theme.space[8]}
                paddingY={theme.space[3]}
                borderTop={i > 0 ? `1px solid ${theme.colors.gray[100]}` : undefined}
              >
                <Text
                  fontSize={[theme.fontSizes.xs, theme.fontSizes.xs, theme.fontSizes.md, theme.fontSizes.md]}
                  whiteSpace="pre-wrap"
                  color={theme.colors.white}
                >
                  {item.name}
                </Text>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
      <Box as="section" paddingX={theme.space[8]} paddingY={theme.space[24]}>
        <Box maxWidth={theme.sizes['5xl']} marginX="auto">
          <Heading
            textAlign="center"
            fontSize={[theme.fontSizes['3xl'], theme.fontSizes['3xl'], theme.fontSizes['5xl'], theme.fontSizes['5xl']]}
            fontWeight="normal"
            marginBottom={theme.space[4]}
          >
            季節のフルコース
          </Heading>
          <Text>旬の食材を使ったフルコースのご用意です。</Text>
          <Text>※時期によってコースの構成が異なります。１名様でも承ります。 </Text>
          <Text>※１日前のご予約をお願いいたします。 お電話にてお好みをお伺いいたします。</Text>
          <Text textAlign="right" fontSize="lg">
            ￥<Number>{9000}</Number>
          </Text>
        </Box>
      </Box>
    </Layout>
  );
};

export default CourseMenuPage;
