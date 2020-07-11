import React, { useState, useCallback } from 'react';
import { Heading, Text, Box, useTheme, SimpleGrid } from '@chakra-ui/core';
import { Card } from '../../components/Card/Card';
import { CardSkeleton } from '../../components/Card/CardSkeleton';
import { ImageModal } from '../../molecules/ImageModal/ImageModal';
import { Layout } from '../../templates/Layout/Layout';
import { useWindowSize } from '../../utils/hooks/useWindowSize';

import useSWR from 'swr';
import fetch from 'unfetch';

import { Menu as TMenu } from '../../models/menu';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export const TakeoutMenuPage = () => {
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
      <SimpleGrid minChildWidth={[theme.sizes.xs, theme.sizes.xs, theme.sizes.sm, theme.sizes.sm]} overflow="hidden">
        {menus
          ? menus.map((menu, i) => (
              <Card
                title={menu.name}
                description={menu.description}
                cost={{
                  price: menu.price,
                  amount: menu.amount,
                }}
                imageUrl={menu.image}
                key={i}
                onClick={onCardClick}
                badges={{
                  isDeliverable: menu.isDeliverable,
                  isFrozen: menu.isFrozen,
                }}
                margin={`0 auto ${theme.space[8]}`}
              />
            ))
          : [...new Array(windowSize.width ? NumCardsInOneLine(windowSize.width) : 1)].map((_, i) => (
              <CardSkeleton key={i} />
            ))}
      </SimpleGrid>
      <ImageModal {...imageModal} onClose={onModalClose} />
    </Layout>
  );
};

export default TakeoutMenuPage;
