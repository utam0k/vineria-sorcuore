import React, { useState, useCallback } from 'react';
import { Heading, Flex, useTheme, Button } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SideMenu } from '../../molecules/SideMenu/SideMenu';
import { LinkItem } from '../../atoms/LinkItem/LinkItem';

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
      position="fixed"
      as="nav"
      background="transparent"
      width={['95%', '95%', '75%']}
      py={theme.space[5]}
      alignItems="center"
      justifyContent="center"
      zIndex={theme.zIndices.sticky}
      top={0}
      left="50%"
      transform="translateX(-50%)"
    >
      <Heading
        as="h1"
        size="lg"
        margin="0"
        flexGrow={1}
        fontFamily="'Libre Baskerville', serif"
        fontWeight="bold"
        color="green.500"
      >
        Vineria Sorcuor
      </Heading>
      <Flex display={['none', 'flex', 'flex', 'flex']}>
        <LinkItem
          href="/"
          fontWeight="bold"
          border="2px solid"
          borderColor="green.500"
          borderRadius="24px"
          color="green.500"
          _hover={{
            color: 'white',
            backgroundColor: 'green.500',
          }}
        >
          ホーム
        </LinkItem>
        <LinkItem
          href="/menu"
          marginLeft="8px"
          fontWeight="bold"
          border="2px solid"
          borderColor="green.500"
          borderRadius="24px"
          color="green.500"
          _hover={{
            color: 'white',
            backgroundColor: 'green.500',
          }}
        >
          メニュー
        </LinkItem>
        <LinkItem
          href="/reservation"
          marginLeft="8px"
          fontWeight="bold"
          border="2px solid"
          borderColor="green.500"
          borderRadius="24px"
          color="green.500"
          _hover={{
            color: 'white',
            backgroundColor: 'green.500',
          }}
        >
          ご予約
        </LinkItem>
      </Flex>
      <Button
        display={['block', 'none', 'none', 'none']}
        p={0}
        aria-label=""
        background="transparent"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faBars} />
      </Button>
      <SideMenu isOpen={isSideMenuShow} onClose={onClose} />
    </Flex>
  );
};
