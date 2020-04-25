import React, { useState, useCallback } from 'react';
import { Heading, Flex, Text, Box, useTheme } from '@chakra-ui/core';
import { Card } from '../components/Card/Card';
import { ImageModal } from '../molecules/ImageModal/ImageModal';
import { Layout } from '../templates/Layout/Layout';

// TODO: Migrate google spreadsheet.
import { menus } from '../../data/menus';

const Menu = () => {
  const theme = useTheme();

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>();

  const onImageClick = useCallback((title: string, imageUrl: string) => {
    setModalOpen(true);
    setImageUrl(imageUrl);
    setModalTitle(title);
  }, []);

  const onModalClose = useCallback(() => {
    setModalOpen(false);
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
            onImageClick={onImageClick}
          />
        ))}
      </Flex>
      <ImageModal isOpen={isModalOpen} imageUrl={imageUrl} title={modalTitle} onClose={onModalClose} />
    </Layout>
  );
};

export default Menu;
