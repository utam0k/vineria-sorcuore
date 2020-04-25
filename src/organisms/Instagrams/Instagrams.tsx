import React from 'react';
import { Box, Flex } from '@chakra-ui/core';
import { BackgroundImage } from '../../atoms/BackgroundImage/BackgroundImage';
import InstagramEmbed from 'react-instagram-embed';

export const Instagrams = () => (
  <Box as="section" position="relative" width="100%" height="100vh">
    <BackgroundImage imageUrl="http://u0u0.net/V499" overlayColor="#5048A1" />
    <Flex justifyContent="space-evenly" alignItems="center" flexWrap="wrap" height="100%">
      {/* TODO: スプレットシートからidを取ってくるようにする */}
      {['B7pieB3Hd2F', 'B6hi5WyHo8h', 'B8VR5gsHp80'].map((id) => {
        const url = 'https://www.instagram.com/p/' + id;
        return (
          // TODO: spでの表示をもっと考える(件数を減らす？)
          <InstagramEmbed url={url} maxWidth={362} key={id} hideCaption injectScript />
        );
      })}
    </Flex>
  </Box>
);
