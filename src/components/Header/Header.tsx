import React, { useState, useCallback } from 'react';
import { Heading, Flex, useTheme, Button } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SideMenu } from '../SideMenu/SideMenu';
import { MenuItem } from '../MenuItem/MenuItem';

export const Header: React.FC = () => {
  const theme = useTheme();

  const [isSideMenuShow, setSideMenuShow] = useState(false);

  const onClick = useCallback(() => {
    setSideMenuShow((show) => !show);
  }, []);

  const onClose = useCallback(() => {
    setSideMenuShow(false);
  }, []);

  return (
    <Flex
      position="sticky"
      as="nav"
      backgroundColor="green.400"
      width="100%"
      px={theme.space[4]}
      py={theme.space[5]}
      borderBottom="2px solid"
      borderColor="green.900"
      alignItems="center"
      justifyContent="center"
      zIndex={theme.zIndices.sticky}
      top={0}
    >
      <Heading as="h1" size="lg" margin="0" flexGrow={1}>
        Vineria Sorcuor
      </Heading>
      <Flex display={['none', 'flex', 'flex', 'flex']}>
        <MenuItem href="/">ホーム</MenuItem>
        <MenuItem href="/menu">メニュー</MenuItem>
        <MenuItem href="/reservation">ご予約</MenuItem>
      </Flex>
      <Button display={['block', 'none', 'none', 'none']} aria-label="" background="transparent" onClick={onClick}>
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <SideMenu isOpen={isSideMenuShow} onClose={onClose} />
    </Flex>
  );
};
