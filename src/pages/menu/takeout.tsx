import React, { useState, useCallback } from 'react';
import { Heading, Flex, Text, Box, useTheme } from '@chakra-ui/core';
import { Card } from '../../components/Card/Card';
import { CardSkeleton } from '../../components/Card/CardSkeleton';
import { ImageModal } from '../../molecules/ImageModal/ImageModal';
import { Layout } from '../../templates/Layout/Layout';
import { useWindowSize } from '../../utils/hooks/useWindowSize';

import useSWR from 'swr';
import fetch from 'unfetch';

import { Menu as TMenu } from '../../models/menu';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const Takeout = () => {
  const theme = useTheme();
  const windowSize = useWindowSize();

  const { data: menus } = useSWR<TMenu[]>(process.env.menuUrl || '', fetcher);

  const [imageModal, setImageModal] = useState<{ isOpen: boolean; title: string; imageUrl: string }>({
    isOpen: false,
    title: '',
    imageUrl: '',
  });

  const onCardClick = useCallback((title: string, imageUrl: string) => {
    setImageModal({ isOpen: true, title, imageUrl });
  }, []);

  const onModalClose = useCallback(() => {
    setImageModal({ isOpen: false, title: '', imageUrl: '' });
  }, []);

  const NumCardsInOneLine = (width: number) => {
    // TODO: get max width of a Card component automatically.
    const cardMaxWidth = 384;
    return cardMaxWidth > width ? 1 : Math.floor(width / cardMaxWidth);
  };

  return (
    <Layout>
      <Box as="header" textAlign="center">
        <Heading as="h1" marginTop={theme.space[8]}>
          ソルクオーレの食卓
        </Heading>
        <Text marginBottom={theme.space[12]} marginTop={theme.space[8]} whiteSpace="pre-wrap">
          {`テイクアウトでお手軽にソルクオーレの本格イタリアンを楽しめるシリーズです！\n夜ご飯のおかずに困ったとき、お酒のお供に。`}
        </Text>
      </Box>
      <Flex align="center" justify="center" flexWrap="wrap">
        {menus
          ? menus.map((menu, i) => (
              <Card
                title={menu.name}
                description={menu.description}
                price={menu.price}
                imageUrl={menu.image}
                key={i}
                onClick={onCardClick}
              />
            ))
          : [...new Array(windowSize.width ? NumCardsInOneLine(windowSize.width) : 1)].map((_, i) => (
              <CardSkeleton key={i} />
            ))}
      </Flex>
      <ImageModal {...imageModal} onClose={onModalClose} />
    </Layout>
  );
};

export default Takeout;
