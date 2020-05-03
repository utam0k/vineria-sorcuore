import React from 'react';
import { Layout } from '../../templates/Layout/Layout';
import { Text, useTheme, ListItem, List, Heading } from '@chakra-ui/core';
import { Section } from '../../organisms/Section/Section';
import { Menu } from '../../models/menu';

const coldVegitables: Pick<Menu, 'name' | 'price'>[] = [
  {
    name: 'チーズ屋さんのお任せチーズ盛り合わせ',
    price: 1300,
  },
  {
    name: 'ドライフルーツの盛り合わせ',
    price: 500,
  },
  {
    name: '自家製ジェラートパルミジャーノ',
    price: 700,
  },
  {
    name: '自家製リコッタチーズとドライフルーツのパテ',
    price: 700,
  },
  {
    name: '伊産 ブラッティーナチーズと厳選トマトのサラダ',
    price: 1800,
  },
  {
    name: '自家製ボイルハムサラダ仕立て',
    price: 1200,
  },
  {
    name: 'イタリア パルマ産の生ハム',
    price: 1800,
  },
  {
    name: '天草直送 鮮魚のカルパッチョ',
    price: 1400,
  },
  {
    name: 'ふるの牛のトモサンカク炙りカルパッチョ',
    price: 2400,
  },
];

const hotVegetables: Pick<Menu, 'name' | 'price'>[] = [
  {
    name: '丸長畑のミネストローネ',
    price: 1200,
  },
  {
    name: '福岡『ふるの牛』レバーのヴィネツィア風',
    price: 2400,
  },
  {
    name:
      'トリッパ\n - フィオレンティーナ風 (トマトベース)\n - ボローニャ風 (白ワインベース)\n - リグーリア風 (ジェノベーゼ)',
    price: 1800,
  },
  {
    name: '自家製ライ麦と全粒粉のパン',
    price: 300,
  },
];

const pastas: Pick<Menu, 'name' | 'price'>[] = [
  {
    name: 'タヤリン バターソースのトリュフがけ',
    price: 2600,
  },
  {
    name: 'ソルクオーレ名物！！\nボローニャ伝統のミートソースのラザニア',
    price: 2400,
  },
  {
    name: '自家製 手打ち麺\n - タリアテッレ ボロネーゼ 又は トマトソース\n - タリオリーニ カラスミ 又は キノコのラグー',
    price: 1600,
  },
  {
    name:
      '乾麺 (麺の太さをお選び頂けます)\nスパゲットーニ (太め) / スパゲッティー (細め)\n - トマトソース / アマトリチャーナ / イカスミ\n - イワシのシチリア風ソース\n - 魚介のラグー 軽いトマトソース',
    price: 1600,
  },
];

const mains: Pick<Menu, 'name' | 'price'>[] = [
  {
    name: '福岡『ふるの牛』シンタマのグリル',
    price: 5500,
  },
  {
    name: '茨城『常陽ポーク』ロース（300g）とサルシッチャ',
    price: 3500,
  },
  {
    name: '仔羊のスペアリブ ロースト～トマトソース～',
    price: 3500,
  },
  {
    name: '北海道『蝦夷鹿』のグーラッシュ ～ポレンタ添え～',
    price: 3500,
  },
  {
    name: 'ヒグマのストラコット～カラマーリ添え～',
    price: 3500,
  },
];

const ALaCarteMenuPage = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Heading textAlign="center" marginTop={theme.space[8]}>
        アラカルトメニュー
      </Heading>
      <Text textAlign="center" fontSize={theme.fontSizes.xs}>
        ※仕入れ状況、時期によってご用意出来ない場合がございます。
      </Text>
      <Section
        image={{
          url: 'https://jimdo-storage.freetls.fastly.net/image/59075570/37c6bc09-9243-421b-887c-6db02035fbca.vibe.jpg',
          alt: '冷菜',
        }}
        title="冷菜"
      >
        <List>
          {coldVegitables.map((item, i) => (
            <ListItem
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              key={item.name}
              paddingY={theme.space[1]}
              borderTop={i > 0 ? `1px solid ${theme.colors.gray[500]}` : undefined}
            >
              <Text
                fontSize={[theme.fontSizes.xs, theme.fontSizes.xs, theme.fontSizes.md, theme.fontSizes.md]}
                whiteSpace="pre-wrap"
              >
                {item.name}
              </Text>
              <Text marginLeft={theme.space[1]}>￥{item.price}</Text>
            </ListItem>
          ))}
        </List>
      </Section>
      <Section
        image={{
          url: 'https://jimdo-storage.freetls.fastly.net/image/58316886/f97fd8ab-f945-423c-b8c0-af6e550bf194.jpg',
          alt: '温菜',
        }}
        title="温菜"
        reverse
      >
        <List>
          {hotVegetables.map((item, i) => (
            <ListItem
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              key={item.name}
              paddingY={theme.space[1]}
              borderTop={i > 0 ? `1px solid ${theme.colors.gray[100]}` : undefined}
            >
              <Text
                fontSize={[theme.fontSizes.xs, theme.fontSizes.xs, theme.fontSizes.md, theme.fontSizes.md]}
                whiteSpace="pre-wrap"
                color={theme.colors.white}
              >
                {item.name}
              </Text>
              <Text color={theme.colors.white} marginLeft={theme.space[1]}>
                ￥{item.price}
              </Text>
            </ListItem>
          ))}
        </List>
      </Section>
      <Section
        image={{
          url: 'https://jimdo-storage.freetls.fastly.net/image/58957463/f6319d71-ecad-4028-8acd-0c66e91ccdea.vibe.jpg',
          alt: 'パスタ',
        }}
        title="パスタ"
      >
        <List>
          {pastas.map((item, i) => (
            <ListItem
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              key={item.name}
              paddingY={theme.space[1]}
              borderTop={i > 0 ? `1px solid ${theme.colors.gray[500]}` : undefined}
            >
              <Text
                whiteSpace="pre-wrap"
                fontSize={[theme.fontSizes.xs, theme.fontSizes.xs, theme.fontSizes.md, theme.fontSizes.md]}
              >
                {item.name}
              </Text>
              <Text marginLeft={theme.space[1]}>￥{item.price}</Text>
            </ListItem>
          ))}
        </List>
      </Section>
      <Section
        image={{
          url: 'https://jimdo-storage.freetls.fastly.net/image/71576938/7b68b3f9-98ad-41a0-9548-6c898ddbdb43.jpg',
          alt: 'メイン',
        }}
        title="メイン"
        reverse
      >
        <List>
          {mains.map((item, i) => (
            <ListItem
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              key={item.name}
              paddingY={theme.space[1]}
              borderTop={i > 0 ? `1px solid ${theme.colors.gray[100]}` : undefined}
            >
              <Text
                fontSize={[theme.fontSizes.xs, theme.fontSizes.xs, theme.fontSizes.md, theme.fontSizes.md]}
                whiteSpace="pre-wrap"
                color={theme.colors.white}
              >
                {item.name}
              </Text>
              <Text color={theme.colors.white} marginLeft={theme.space[1]}>
                ￥{item.price}
              </Text>
            </ListItem>
          ))}
        </List>
      </Section>
    </Layout>
  );
};

export default ALaCarteMenuPage;
