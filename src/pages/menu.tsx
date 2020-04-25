import React, { useState, useCallback } from 'react';
import { Heading, Flex, Text, Box, useTheme } from '@chakra-ui/core';
import { Card } from '../components/Card/Card';
import { ImageModal } from '../molecules/ImageModal/ImageModal';
import { Layout } from '../templates/Layout/Layout';

// TODO: Migrate to google spreadsheet.
import { menus } from '../../data/menus';

const Menu = () => {
  const theme = useTheme();

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
        {menus.map((menu, i) => (
          <Card
            title={menu.title}
            description={menu.description}
            price={menu.price}
            imageUrl={menu.imageUrl}
            key={i}
            onClick={onCardClick}
          />
        ))}
      </Flex>
      <ImageModal {...imageModal} onClose={onModalClose} />
    </Layout>
  );
};

export default Menu;
