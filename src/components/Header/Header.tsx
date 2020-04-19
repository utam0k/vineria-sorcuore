import React, { useState, useCallback } from 'react';
import { Box, Heading, Flex, Text, Button } from '@chakra-ui/core';

const MenuItems: React.FC = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

export const Header: React.FC<any> = (props) => {
  const [show, setShow] = useState(false);
  const handleToggle = useCallback(() => setShow((show) => !show), []);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="teal.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg">
          Vineria Sorcuor
        </Heading>
      </Flex>

      <Box display={{ sm: 'block', md: 'none' }} onClick={handleToggle}>
        <svg fill="white" width="12px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? 'block' : 'none', md: 'flex' }}
        width={{ sm: 'full', md: 'auto' }}
        alignItems="center"
        flexGrow={1}
      >
        <MenuItems>ホーム</MenuItems>
        <MenuItems>メニュー</MenuItems>
        <MenuItems>ご予約</MenuItems>
      </Box>
    </Flex>
  );
};
