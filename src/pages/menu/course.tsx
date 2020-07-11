import React from 'react';
import { Text, Heading, Flex, Box, useTheme } from '@chakra-ui/core';

import { Layout } from '../../templates/Layout/Layout';
import { Number } from '../../atoms/Number/Number.component';

export const CourseMenuPage = () => {
  const theme = useTheme();
  return (
    <Layout>
      <Box as="header" margin="auto" maxWidth={theme.sizes['4xl']}>
        <Heading as="h1" textAlign="center" marginTop={theme.space[8]}>
          コースメニュー
        </Heading>
        <Box marginBottom={theme.space[12]} marginTop={theme.space[8]} marginX={theme.space[8]}>
          <Text whiteSpace="pre-wrap">
            {`旬の食材、イタリア直送の食材を使ったフルコースのご用意です。パスタとメインディッシュがプリフィックスとなっており、メインディッシュはご予約の際にお伺いいたします。お任せコースも承ります。コースは事前の予約をお願いいたします。`}
          </Text>
          <Text whiteSpace="pre-wrap" textAlign="right">
            税別 ￥<Number>{9000}</Number> ~
          </Text>
        </Box>
      </Box>
      <Flex
        paddingY={[theme.space[0], theme.space[0], theme.space[4], theme.space[4]]}
        justify="center"
        flexWrap={['wrap', 'wrap', 'nowrap', 'nowrap']}
        paddingX={theme.space[1]}
      >
        <Box
          maxWidth={theme.sizes['4xl']}
          marginBottom={[theme.space[8], theme.space[8], 0, 0]}
          marginTop={theme.space[4]}
          marginRight={[theme.space[8], theme.space[8], 0, 0]}
          marginLeft={[theme.space[8], theme.space[8], 0, 0]}
        >
          {[
            {
              name: 'アミューズ盛り合わせ',
              desc: 'その日のお任せ盛り合わせ',
            },
            {
              name: '冷菜 2品',
              desc: '丸長青果さんの季節の野菜 と熊本 天草の鮮魚のマリネ',
            },
            {
              name: '温菜',
              desc: 'その日のお任せ',
            },
            {
              name: 'お肉',
              desc:
                '・常陽ポークのグリル\n・ふるの牛 シンタマグリル\n・季節のジビエ  猪 又は 蝦夷鹿 （鹿は＋￥1000）\n・二宮さんのホロホロ鳥フリカッセ\n・二宮さんのバルバリー鴨のソテー\n・西川さん 北海道アスパラひつじ\n\nご予約の際にお伺い致します。 \n仕入れ状況によりご用意できない場合がございますのでご了承ください。',
            },
            {
              name: 'パスタ',
              desc: 'お任せパスタ',
            },
            {
              name: 'デザート',
              desc: 'お好みのデザート\n食後のお飲み物',
            },
          ].map((item, i) => (
            <Flex
              key={i}
              minWidth={[0, 0, theme.sizes['xl'], theme.sizes['xl']]}
              alignItems={['left', 'left', 'center', 'center']}
              direction="column"
            >
              <Heading
                width="100%"
                fontSize={['lg', 'lg', '2xl', '2xl']}
                fontWeight="medium"
                borderBottom="solid 1px gray"
                marginBottom={[theme.space[2], theme.space[2], 0, 0]}
                textAlign={['left', 'left', 'center', 'center']}
              >
                {item.name}
              </Heading>
              <Text
                marginLeft={[theme.space[4], theme.space[4], 0, 0]}
                marginBottom={[theme.space[6]]}
                marginTop={[0, 0, theme.space[2], theme.space[2]]}
                whiteSpace="pre-wrap"
                overflowWrap="break-word"
                wordBreak="break-all"
                textAlign={['left', 'left', 'left', 'center']}
              >
                {item.desc}
              </Text>
            </Flex>
          ))}
        </Box>
      </Flex>
    </Layout>
  );
};

export default CourseMenuPage;
