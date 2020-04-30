import React, { useState, useEffect } from 'react';
import { Heading, Text, Tabs, TabList, Tab, TabPanels, TabPanel, Flex, Button, Link, useTheme } from '@chakra-ui/core';

import { Layout } from '../templates/Layout/Layout';
import { Description } from '../organisms/Description/Description';
import { Instagrams } from '../organisms/Instagrams/Instagrams';
import { Section } from '../organisms/Section/Section';
import { useWindowSize } from '../utils/hooks/useWindowSize';

const Home = () => {
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
            href={`access`}
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Button variantColor="teal">アクセス</Button>
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
        reverse={true}
      >
        <Tabs
          defaultIndex={0}
          marginTop={theme.space[8]}
          variant="enclosed"
          variantColor="purple"
          orientation={orientation}
        >
          <TabList>
            <Tab _focus={{ outline: 'none' }} color={theme.colors.white}>
              スパークリングワイン
            </Tab>
            <Tab _focus={{ outline: 'none' }} color={theme.colors.white}>
              白ワイン
            </Tab>
            <Tab _focus={{ outline: 'none' }} color={theme.colors.white}>
              赤ワイン
            </Tab>
          </TabList>
          <TabPanels minHeight={theme.sizes[40]} color={theme.colors.white}>
            <TabPanel>
              <Flex justify="space-between" marginTop={theme.space[3]}>
                <Heading as="h4" size="sm">
                  ドラピエ カルトドール (フランス・シャンパーニュ）
                </Heading>
                <Text>￥8800</Text>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex justify="space-between" marginTop={theme.space[3]}>
                <Heading as="h4" size="sm">
                  ソ アヴェ (イタリア・ヴェネト)
                </Heading>
                <Text>￥4800</Text>
              </Flex>
            </TabPanel>
            <TabPanel>
              <Flex justify="space-between" marginTop={theme.space[3]}>
                <Heading as="h4" size="sm">
                  キャンティ リゼルヴァ (イタリア・トスカーナ )
                </Heading>
                <Text>￥4800</Text>
              </Flex>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Section>
      <Instagrams />
    </Layout>
  );
};

export default Home;
