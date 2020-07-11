import React, { Fragment } from 'react';
import { Link, Button, SimpleGrid, Text, Heading, Flex, Box, useTheme } from '@chakra-ui/core';

import { Layout } from '../templates/Layout/Layout';

export const ReservationPage = () => {
  const theme = useTheme();
  return (
    <Layout>
      <Box as="header" textAlign="center" marginBottom={theme.space[12]}>
        <Heading as="h1" marginTop={theme.space[8]}>
          ご予約
        </Heading>
        <Box marginBottom={theme.space[4]} marginTop={theme.space[8]} marginX={theme.space[4]}>
          <Text whiteSpace="pre-wrap">
            {`宴会のご相談やメニューのご相談お気軽にお問い合わせください！\nコースはご予約のみとなっており、5名様以上はコースをオススメしております。`}
          </Text>
        </Box>
        <Flex flexWrap="wrap" justifyContent="center">
          <Link
            href="tel:0362840446"
            isExternal
            _hover={{
              textDecoration: 'none',
            }}
          >
            <Button
              leftIcon="phone"
              variantColor="green"
              variant="solid"
              marginX={theme.space[2]}
              width={theme.sizes[56]}
              aria-label="電話で予約する"
            >
              電話で予約する
            </Button>
          </Link>
        </Flex>
      </Box>
      <Flex
        paddingY={[theme.space[0], theme.space[0], theme.space[0], theme.space[4]]}
        justify="center"
        flexWrap={['wrap', 'wrap', 'wrap', 'nowrap']}
        paddingX={theme.space[1]}
      >
        <Box
          width={theme.sizes.lg}
          marginRight={[theme.space[8], theme.space[8], theme.space[8], theme.space[16]]}
          marginLeft={[theme.space[8], theme.space[8], theme.space[8], 0]}
          marginBottom={[theme.space[8], theme.space[8], theme.space[8], 0]}
          marginTop={theme.space[4]}
        >
          <SimpleGrid columns={[1, 1, 1, 2]} spacingX={6} spacingY={[0, 0, 0, 4]}>
            {[
              {
                name: '住所',
                desc: '〒130-0021 東京都墨田区緑1丁目6-3あさみパレス1階',
              },
              { name: 'TEL', desc: '03-6284-0446' },
              { name: '定休日', desc: '火曜日' },
              { name: 'ランチ営業', desc: '月～日曜\n11時半～15時 L.O. 14時' },
              {
                name: 'ディナー営業',
                desc:
                  '月～土曜\n18時～24時\n23時最終入店 フードL.O. 22時\n\n日曜日\n18時～21時  21時最終入店\n\n月曜日 不定休 有り',
              },
            ].map((item, i) => (
              <Fragment key={i}>
                <Flex borderRight={['none', 'none', 'none', 'solid']}>
                  <Heading
                    fontSize={['lg', 'lg', 'lg', 'md']}
                    fontWeight={['2xl', '2xl', '2xl', 'md']}
                    width="100%"
                    borderBottom={['solid', 'solid', 'solid', 'none']}
                    marginBottom={[theme.space[2], theme.space[2], 0, 0]}
                  >
                    {item.name}
                  </Heading>
                </Flex>
                <Text
                  marginLeft={[theme.space[4], theme.space[4], theme.space[4], 0]}
                  marginBottom={[theme.space[6], theme.space[6], theme.space[6], 0]}
                  whiteSpace="pre-wrap"
                  overflowWrap="break-word"
                  wordBreak="break-all"
                >
                  {item.desc}
                </Text>
              </Fragment>
            ))}
          </SimpleGrid>
        </Box>
        <Box
          width={theme.sizes.lg}
          height={[theme.sizes[48], theme.sizes[48], theme.sizes[48], theme.sizes.md]}
          marginBottom={[theme.space[8], theme.space[8], theme.space[8], 0]}
        >
          <iframe
            title="map"
            frameBorder="0"
            style={{ width: '100%', height: '100%' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3338982668247!2d139.79703251566926!3d35.69340013691105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889d9c651f49b%3A0xd05466b3466c9acb!2z44O044Kj44ON44Oq44KiIOOCveODq-OCr-OCquODvOODrFZpbmVyaWEgU29yY3VvcmU!5e0!3m2!1sja!2sjp!4v1588411529012!5m2!1sja!2sjp"
          ></iframe>
        </Box>
      </Flex>
    </Layout>
  );
};

export default ReservationPage;
