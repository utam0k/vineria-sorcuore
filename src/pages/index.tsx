import React, { useState, useEffect } from 'react';
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
        reverse={true}
        title="Concept"
        text={
          '両国駅から徒歩８分と少し離れた隠れ家的イタリアンです。\nカウンターを中心とした広々としたお席で､皆様にゆっくりとお食事を楽しんで頂ける空間となっております。\n夜９時以降はふらっと、軽くつまんでワインを飲みたいお客様の為にもワインバーとして立ち飲みスペースも設けております。\nお酒が飲み足りない方や帰り道の方もぜひ、お気軽にお立ち寄りください！'
        }
        image={{
          url:
            'https://jimdo-storage.freetls.fastly.net/image/58541700/a859a20a-51e0-411d-a2f0-68d07866595a.jpg?format=pjpg&quality=80&auto=webp&disable=upscale',
          alt: 'about',
        }}
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
        title="Lunch"
        reverse={true}
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
            <>
              <Flex justify="space-between" marginTop={theme.space[1]}>
                <Heading fontSize="md" fontWeight="md" color={theme.colors.white}>
                  {item.name}
                </Heading>
                <Text fontSize="md" color={theme.colors.white}>
                  {item.price}円
                </Text>
              </Flex>
            </>
          ))}
        </Box>
      </Section>
      <Section
        title="SNS"
        text={'店舗からのお知らせや、料理の写真などを掲載しています。'}
        image={{
          url: 'https://instagram.com/p/B5uHGflHeCy/media?size=l',
          alt: 'lunch',
        }}
      >
        <Flex align="center" justify="center" flexWrap="wrap" marginTop={theme.space[4]}>
          {[
            { name: 'Instagram', href: 'https://www.instagram.com/vineriasorcuore1213/', icon: faInstagram },
            { name: 'Facebook', href: 'https://www.facebook.com/vineriasorcuore1213/', icon: faFacebook },
          ].map((item) => (
            <Link href={item.href} marginX={theme.space[2]} marginBottom={theme.space[4]} key={item.name} isExternal>
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
