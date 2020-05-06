import React, { Fragment } from 'react';
import { Link, Button, SimpleGrid, Text, Heading, Flex, Box, useTheme } from '@chakra-ui/core';

import { Layout } from '../../templates/Layout/Layout';

export const MenuTop = () => {
  const theme = useTheme();
  return (
    <Layout>
      <Heading as="h1" textAlign="center" marginY={[theme.space[4], theme.space[4], theme.space[4], theme.space[8]]}>
        メニュー
      </Heading>
      <Flex
        paddingY={[theme.space[0], theme.space[0], theme.space[0], theme.space[4]]}
        justify="center"
        flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
        paddingX={theme.space[1]}
      >
        <Box
          maxWidth={theme.sizes['4xl']}
          marginBottom={[theme.space[8], theme.space[8], theme.space[8], 0]}
          marginTop={theme.space[4]}
          marginRight={[theme.space[8], theme.space[8], theme.space[8], theme.space[16]]}
          marginLeft={[theme.space[8], theme.space[8], theme.space[8], 0]}
        >
          <SimpleGrid columns={[1, 1, 1, 2]} spacingX={6} spacingY={[0, 0, 0, 12]}>
            {[
              {
                name: 'コース',
                desc:
                  '旬の食材、イタリア直送の食材を使ったフルコースのご用意です。パスタとメインディッシュがプリフィックスとなっており、メインディッシュはご予約の際にお伺いいたします。お任せコースも承ります。\n※コースは予約のみ',
                button: {
                  label: '詳細を見る',
                  link: '/menu/course',
                },
              },
              {
                name: 'アラカルト',
                desc: 'ワインに合う小皿のおつまみから、本格的なイタリアの郷土料理まで豊富に揃えております。',
                button: {
                  label: '詳細を見る',
                  link: 'menu/a-la-carte',
                },
              },
              {
                name: 'テイクアウト',
                desc:
                  'テイクアウトでお手軽にソルクオーレの本格イタリアンを楽しめるシリーズです！夜ご飯のおかずに困ったとき、お酒のお供に。',
                button: {
                  label: '詳細を見る',
                  link: 'menu/takeout',
                },
              },
            ].map((item, i) => (
              <Fragment key={i}>
                <Flex borderRight={['none', 'none', 'none', 'solid']}>
                  <Heading
                    fontSize={['lg', 'lg', 'xl', 'xl']}
                    fontWeight={['2xl', '2xl', '2xl', 'md']}
                    width="100%"
                    borderBottom={['solid', 'solid', 'solid', 'none']}
                    marginBottom={[theme.space[2], theme.space[2], 0, 0]}
                    textAlign={['left', 'left', 'center', 'center']}
                  >
                    {item.name}
                  </Heading>
                </Flex>
                <Box marginBottom={[theme.space[6], theme.space[6], theme.space[6], 0]}>
                  <Text
                    marginLeft={[theme.space[4], theme.space[4], theme.space[4], 0]}
                    whiteSpace="pre-wrap"
                    overflowWrap="break-word"
                    wordBreak="break-all"
                  >
                    {item.desc}
                  </Text>
                  <Flex marginTop={theme.space[4]} align="center" justify="center">
                    <Link
                      href={item.button.link}
                      _hover={{
                        textDecoration: 'none',
                      }}
                    >
                      <Button variantColor="gray" variant="outline">
                        {item.button.label}
                      </Button>
                    </Link>
                  </Flex>
                </Box>
              </Fragment>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Layout>
  );
};

export default MenuTop;
