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
        title="About"
        text={
          '初めは千葉県松戸市の「オステリア タナロ」から始まりました。\nイタリア滞在経験がありイタリアをこよなく愛するオーナー兼ソムリエの成嶋とシェフの神谷の熱い思いによって皆様に愛されるお店になり、そして２号店となる「ヴィネリア ソルクオーレ」を両国にオープンする事が出来ました。\n当店ではイタリア滞在経験のあるシェフ神谷がお料理をご提供します。'
        }
        image={{
          url:
            'https://jimdo-storage.freetls.fastly.net/image/58541700/a859a20a-51e0-411d-a2f0-68d07866595a.jpg?format=pjpg&quality=80&auto=webp&disable=upscale',
          alt: 'about',
        }}
      >
        <Flex marginTop={theme.space[8]} align="center" justify="center">
          <Link
            href={'/menu'}
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Button variantColor="teal" variant="outline">
              メニューを見る
            </Button>
          </Link>
        </Flex>
      </Section>
      <Section
        title="Concept"
        text={
          '両国駅から徒歩８分と少し離れた隠れ家的イタリアンです。\nカウンターを中心とした広々としたお席で､皆様にゆっくりとお食事を楽しんで頂ける空間となっております。\n夜９時以降はふらっと、軽くつまんでワインを飲みたいお客様の為にもワインバーとして立ち飲みスペースも設けております。\nお酒が飲み足りない方や帰り道の方もぜひ、お気軽にお立ち寄りください！'
        }
        image={{
          url:
            'https://jimdo-storage.freetls.fastly.net/image/58541700/a859a20a-51e0-411d-a2f0-68d07866595a.jpg?format=pjpg&quality=80&auto=webp&disable=upscale',
          alt: 'about',
        }}
        reverse
      >
        <Flex marginTop={theme.space[8]} align="center" justify="center">
          <Link
            href={'/store-information'}
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Button variantColor="yellow" variant="outline">
              店舗情報
            </Button>
          </Link>
        </Flex>
      </Section>
      <Section
        title="Lunch"
        text={
          'イタリアで修行を重ねたシェフによる、イタリアンビュッフェ。（お持ち帰り弁当も可）イタリアの塩、エクストラヴァージンオイルで調理したオードブルとパスタが１０種類以上！！\nテイクアウト弁当もご用意しておりますのでお仕事の休憩中にもオススメです。（セルフサービス）イートインも設けております。'
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
        title="Dinner"
        text={
          '旬の食材、イタリア直送の食材を使ったフルコースのご用意です。\nパスタとメインディッシュがプリフィックスとなっており、メインディッシュはご予約の際にお伺いいたします。お任せコースも承ります。\nまた、アラカルトではワインに合う小皿のおつまみから、本格的なイタリアの郷土料理まで豊富に揃えております。'
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
        title="Wine"
        text={'イタリア、フランスワインを常時40種類程取り揃えております。ほんの一部をご紹介します。'}
        image={{
          url: 'http://u0u0.net/V499',
          alt: 'about',
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
              <Flex justify="space-between" marginTop={theme.space[3]}>
                <Heading as="i" fontSize="md" fontWeight="md">
                  ドラピエ カルトドール (フランス・シャンパーニュ)
                </Heading>
                <Text fontSize="sm">￥8800</Text>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex justify="space-between" marginTop={theme.space[3]}>
                <Heading as="i" fontSize="md" fontWeight="md">
                  ソ アヴェ (イタリア・ヴェネト)
                </Heading>
                <Text fontSize="sm">￥4800</Text>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex justify="space-between" marginTop={theme.space[3]}>
                <Heading as="i" fontSize="md" fontWeight="md">
                  キャンティ リゼルヴァ (イタリア・トスカーナ)
                </Heading>
                <Text fontSize="sm">￥4800</Text>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Section>
      <Section
        title="Takeout"
        text={
          'ソルクオーレの食卓は、テイクアウトでお手軽にソルクオーレの本格イタリアンを楽しめるシリーズです！\n夜ご飯のおかずに困ったとき、お酒のお供に。'
        }
        image={{
          url: 'https://instagram.com/p/B_HK9yrHK6P/media?size=l',
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
            <Button variantColor="yellow" variant="outline">
              メニューを見る
            </Button>
          </Link>
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
      <Section
        title="SNS"
        text={'店舗からの最新のお知らせや、料理の写真などを掲載しています。よかったら覗いてみてください。'}
        image={{
          url: 'https://instagram.com/p/B5uHGflHeCy/media?size=l',
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
              <Button>
                <FontAwesomeIcon icon={item.icon} />
                <Text marginLeft={theme.space[2]} fontSize={theme.fontSizes.sm}>
                  {item.name}
                </Text>
              </Button>
            </Link>
          ))}
        </Flex>
      </Section>
    </Layout>
  );
};

export default Home;
