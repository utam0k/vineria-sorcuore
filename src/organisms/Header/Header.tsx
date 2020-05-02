import React, { useState, useCallback, useEffect } from 'react';
import { Heading, Flex, useTheme, Button } from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { SideMenu } from '../../molecules/SideMenu/SideMenu';
import { LinkItem } from '../../atoms/LinkItem/LinkItem';

type Props = {
  position?: 'fixed' | 'sticky';
  needGradation?: boolean;
};

export const Header: React.FC<Props> = ({ position = 'sticky', needGradation = false }) => {
  const theme = useTheme();

  const [isSideMenuShow, setSideMenuShow] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('rgba(0, 0, 0, 0)');

  const onClick = useCallback(() => {
    setSideMenuShow((show) => !show);
  }, []);

  const onClose = useCallback(() => {
    setSideMenuShow(false);
  }, []);

  const onScroll = useCallback(() => {
    const alpha = Math.min(window.pageYOffset / window.outerHeight, 0.8);
    setBackgroundColor(`rgba(0, 0, 0, ${alpha})`);
  }, []);

  useEffect(() => {
    if (!needGradation) {
      setBackgroundColor('rgba(0, 0, 0, 0.8)');
      return;
    }
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, [needGradation, onScroll]);

  return (
    <Flex
      position={position}
      as="nav"
      background={backgroundColor}
      width="100vw"
      px={[theme.space[2], theme.space[2], theme.space[10], theme.space[10]]}
      py={[theme.space[2], theme.space[2], theme.space[5], theme.space[5]]}
      alignItems="center"
      justifyContent="center"
      zIndex={theme.zIndices.sticky}
      top={0}
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
      <Flex display={['none', 'none', 'flex', 'flex']}>
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
          href="/access"
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
          アクセス
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
        display={['block', 'block', 'none', 'none']}
        p={0}
        aria-label=""
        background="transparent"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faBars} color={theme.colors.green[500]} />
      </Button>
      <SideMenu isOpen={isSideMenuShow} onClose={onClose} />
    </Flex>
  );
};
