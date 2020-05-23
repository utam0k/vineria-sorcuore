import React, { useState, useEffect, Fragment } from 'react';
import {
  Box,
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  Button,
  Link,
  useTheme,
  SimpleGrid,
} from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import { Layout } from '../templates/Layout/Layout';
import { Description } from '../organisms/Description/Description';
import { Section } from '../organisms/Section/Section';
import { useWindowSize } from '../utils/hooks/useWindowSize';

export const Home = () => {
  const theme = useTheme();

  const { width } = useWindowSize();

  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');

  useEffect(() => {
    // TODO: Get breakpoint from theme
    const breakpoint = 624;
    if (!width) {
      setOrientation('horizontal');
      return;
    }

    if (width < breakpoint) {
      setOrientation('vertical');
      return;
    }
    setOrientation('horizontal');
  }, [width]);

  return (
    <Layout position="fixed" needGradation>
      <Description />
      <Section
        title="Concept"
        text={
          '住宅街にひっそりと佇むイタリアンレストラン。\n広々としたカウンターのお席で時間を忘れてワインとお食事をお楽しみいただけます。'
        }
        image={{
          url:
            'https://jimdo-storage.freetls.fastly.net/image/58541700/a859a20a-51e0-411d-a2f0-68d07866595a.jpg?format=pjpg&quality=80&auto=webp&disable=upscale',
          alt: 'concept',
        }}
      />
      <Section
        title="Dinner"
        text={
          'イタリアの郷土料理から定番のお料理まで幅広いアラカルトメニュー。\n旬の食材、イタリアの食材を使ったお任せフルコース。\nその時々のお料理をご用意しております。'
        }
        image={{
          url: 'https://www.instagram.com/p/B-oZvE7nAGL/media?size=l',
          alt: 'dinner',
        }}
        reverse
      >
        <Flex justify="center" alignItems="center" marginTop={theme.space[8]} flexWrap="wrap">
          {[
            { name: 'コースメニュー', href: '/menu/course' },
            { name: 'アラカルトメニュー', href: '/menu/a-la-carte' },
          ].map((item) => (
            <Link
              href={item.href}
              marginX={theme.space[2]}
              marginBottom={theme.space[4]}
              _hover={{
                textDecoration: 'none',
              }}
              key={item.name}
            >
              <Button variantColor="yellow" variant="outline">
                {item.name}
              </Button>
            </Link>
          ))}
        </Flex>
      </Section>
      <Section
        title="Lunch"
        text={
          'ビュッフェスタイルのお得なランチ。\nオードブルを８種類以上、作り立てのパスタをご用意いたします。\n（テイクアウトも可能です。）'
        }
        image={{
          url:
            'https://jimdo-storage.freetls.fastly.net/image/75731262/55fee928-e220-4128-90c1-f7b19544ce20.jpg?format=pjpg&quality=80&auto=webp&disable=upscale',
          alt: 'lunch',
        }}
      >
        <Box marginTop={theme.space[8]}>
          {[
            { name: 'ブッフェ45分', price: '1,100' },
            { name: 'ブッフェ75分', price: '1,650' },
            { name: '詰め放題・お持ち帰り弁当', price: '1,100' },
            { name: '飲み放題ワイン45分', price: '1,000' },
          ].map((item) => (
            <Fragment key={item.name}>
              <Flex justify="space-between" marginTop={theme.space[1]}>
                <Heading fontSize="md" fontWeight="md">
                  {item.name}
                </Heading>
                <Text fontSize="md">{item.price}円</Text>
              </Flex>
            </Fragment>
          ))}
        </Box>
      </Section>
      <Section
        title="Takeout"
        text={
          'ソルクオーレの食卓は、テイクアウトでお手軽にソルクオーレの本格イタリアンを楽しめるシリーズです！\n夜ご飯のおかずに困ったとき、お酒のお供に。'
        }
        image={{
          url:
            'https://lh3.googleusercontent.com/ZPVP_2WB3wQR7xxGJ3__g56T0Ah0_LhBV42WWUqI7wnxKMk8XLrng1JI7bbyTMydPXcu1bFy5xlVoCUb1Ybb1eA82cCsdQLSPstCfndcS9N1WHv_Z2yy0U0cpDE8Y5NiRXbXUyXwgA',
          alt: 'takeout',
        }}
        reverse
      >
        <Flex justify="center" alignItems="center" marginTop={theme.space[8]}>
          <Link
            href={'/menu/takeout'}
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Button variantColor="yellow" variant="outline" aria-label="メニューを見る">
              メニューを見る
            </Button>
          </Link>
        </Flex>
      </Section>
      <Section
        title="Wine"
        text={'イタリア、フランスワインを常時40種類程取り揃えております。ほんの一部をご紹介します。'}
        image={{
          url:
            'https://lh3.googleusercontent.com/7X2iPnNeosuOiKJ81TREeEs2HEfz1IrmK60NqsMzwj3iaG4SvAL_VUK2ncKPEwwJPcJLCWWnKY-t80qssdF3t-oF7InWJwv7GoiNhJWVgJfs1lou_EmHqIKZDsdf1ugyIiMPN0-QtA',
          alt: 'wine',
        }}
      >
        <Tabs
          defaultIndex={0}
          marginTop={theme.space[8]}
          variant="solid-rounded"
          variantColor="green"
          orientation={orientation}
        >
          <TabList>
            <Tab _focus={{ outline: 'none' }}>スパークリングワイン</Tab>
            <Tab _focus={{ outline: 'none' }}>白ワイン</Tab>
            <Tab _focus={{ outline: 'none' }}>赤ワイン</Tab>
          </TabList>
          <TabPanels minHeight={theme.sizes[40]}>
            <TabPanel>
              {[
                { name: 'ドラピエ カルトドール (フランス・シャンパーニュ)', price: 8800 },
                { name: 'フェッラーリ ペルレ (イタリア・トレント)', price: 9000 },
                { name: 'フランチャコルタ  ドッサージュ ゼロ ウーノ (イタリア・ロンバルディア)', price: 1200 },
              ].map((item, i) => (
                <Flex key={i} justify="space-between" marginTop={theme.space[3]}>
                  <Heading fontSize="md" fontWeight="md">
                    {item.name}
                  </Heading>
                  <Text fontSize="md">￥{item.price}</Text>
                </Flex>
              ))}
            </TabPanel>
            <TabPanel>
              {[
                { name: 'ソ アヴェ (イタリア・ヴェネト)', price: 4800 },
                { name: '"アルターレ" トレッビアーノ ダブルッツォ (イタリア・アブルッツォ)', price: 7800 },
                { name: 'シャトーヌフ デュ パプ ブラン (フランス・コート デュ ローヌ)', price: 8800 },
                { name: 'サンセール (フランス・ロワール)', price: 11000 },
              ].map((item, i) => (
                <Flex key={i} justify="space-between" marginTop={theme.space[3]}>
                  <Heading fontSize="md" fontWeight="md">
                    {item.name}
                  </Heading>
                  <Text fontSize="md">￥{item.price}</Text>
                </Flex>
              ))}
            </TabPanel>
            <TabPanel>
              {[
                { name: 'キャンティ  リゼルヴァ (イタリア・トスカーナ)', price: 4800 },
                { name: 'アルデッシュ マルコス ルージュ (フランス・ローヌ)', price: 6000 },
                { name: 'ブルネッロ ディ モンタルチーノ (イタリア・トスカーナ)', price: 1300 },
                { name: 'コルナス "ラ  ルーヴ" (フランス・ローヌ)', price: 20000 },
              ].map((item, i) => (
                <Flex key={i} justify="space-between" marginTop={theme.space[3]}>
                  <Heading fontSize="md" fontWeight="md">
                    {item.name}
                  </Heading>
                  <Text fontSize="md">￥{item.price}</Text>
                </Flex>
              ))}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Section>
      <Section
        title="SNS"
        text={'店舗からの最新のお知らせや、料理の写真などを掲載しています。よかったら覗いてみてください。'}
        image={{
          url:
            'https://lh3.googleusercontent.com/YhdX0cVoH1I8NtF-4ZdLngPyBsxQmoUg_fDlT0B4Ah3NtfQRDPkl6s5wvh_PO-RvlmjdXDXsDjuRs93-wB8KRuxBgaNb4wGgHjgLYV96jNv3DSOV0hnGNRu3d1s7KNMdaVvBJtKPxKSa54qflvrXWoRAGlzszpxZHjP4dtBUq0i2X4W5brOVt0S5eAm14qk4UnSpvfE6tkqGnKbkg6EEPaPIB-YOrLjTVDstU8r3A8gkK4uuuCBIWLxjR0nPQofBDaeXpm0Gb3-qwdZpA36fJQKsFfLW1SAH9uA9zJqKaHxi81Uz6ZDZWNMCppt3spx6-Rzs6TtrIL4QrRvpPSThacYwJU9ZlLsJezi28GsITfFGpnmhAKHAxEm4J0LXZHorU89Yz0kBnOd1lwQ6kJrdKKcdlMat1zL58p-Nmf7FGLmgWlZ8kW2tv4wvW5aL9yopUa94Z6YatZGsJgMObj-vCHVzDjNI_Rm7v9aAzNlHTbMST9l6qZgAm1kQV1raakQGrPOtrNNIJUm_AizLFUhFyBGgg9mkU5kGkARhsbaGj3MlTZ77LP0-cGxXpKXCpG9Xto_euKxoVHW1d4HpiTnZzyNDqW7RhCQix8Ykh5gZHIhIOVzU4WTBZDEV9hSzZSduiopIxChsxjcw4Fx1dhi_Mpxz8kqgqkBiQ8b4i7ANQZhny1VJJ_k_0Udzik0B_YKPuo-MOhM75bRqrZ616hKPhLstYtUwOPE2SVJgYV9FcD7LHXeEgtTM5g',
          alt: 'sns',
        }}
        reverse
      >
        <Flex align="center" justify="center" flexWrap="wrap" marginTop={theme.space[4]}>
          {[
            { name: 'Instagram', href: 'https://www.instagram.com/vineriasorcuore1213/', icon: faInstagram },
            { name: 'Facebook', href: 'https://www.facebook.com/vineriasorcuore1213/', icon: faFacebook },
          ].map((item) => (
            <Link
              href={item.href}
              marginX={theme.space[2]}
              marginBottom={theme.space[4]}
              key={item.name}
              _hover={{ textDecoration: 'none' }}
              isExternal
            >
              <Button aria-label={item.name}>
                <FontAwesomeIcon icon={item.icon} />
                <Text marginLeft={theme.space[2]} fontSize={theme.fontSizes.sm}>
                  {item.name}
                </Text>
              </Button>
            </Link>
          ))}
        </Flex>
      </Section>
      <Section
        title="Information"
        image={{
          url: 'https://instagram.com/p/B8kkfNWnikO/media?size=l',
          alt: 'information',
        }}
        imageSubstitute={
          <Box
            width="100%"
            height={[theme.sizes[48], theme.sizes[48], theme.sizes.md, theme.sizes.md]}
            objectFit="cover"
          >
            <iframe
              title="map"
              frameBorder="0"
              style={{ width: '100%', height: '100%' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3338982668247!2d139.79703251566926!3d35.69340013691105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889d9c651f49b%3A0xd05466b3466c9acb!2z44O044Kj44ON44Oq44KiIOOCveODq-OCr-OCquODvOODrFZpbmVyaWEgU29yY3VvcmU!5e0!3m2!1sja!2sjp!4v1588411529012!5m2!1sja!2sjp"
            ></iframe>
          </Box>
        }
      >
        <SimpleGrid columns={1} spacingX={6}>
          {[
            {
              name: '住所',
              desc: '〒130-0021 東京都墨田区緑1丁目6-3あさみパレス1階',
            },
            { name: 'TEL', desc: '03-6284-0446' },
            { name: '定休日', desc: '火曜日' },
            { name: 'ランチ営業', desc: '月～日曜 11時半～15時 L.O. 14時' },
            {
              name: 'ディナー営業',
              desc:
                '月～土曜 18時～24時 23時最終入店(フードL.O. 22時)\n日曜日 18時～21時 21時最終入店\n月曜日 不定休有り',
            },
          ].map((item, i) => (
            <Fragment key={i}>
              <Box>
                <Heading
                  fontSize={['lg', 'lg', 'lg', 'md']}
                  borderBottom="solid"
                  marginTop={theme.space[6]}
                  marginBottom={theme.space[2]}
                >
                  {item.name}
                </Heading>
              </Box>
              <Text marginLeft={theme.space[4]} whiteSpace="pre-wrap" overflowWrap="break-word" wordBreak="break-all">
                {item.desc}
              </Text>
            </Fragment>
          ))}
        </SimpleGrid>
      </Section>
    </Layout>
  );
};

export default Home;
