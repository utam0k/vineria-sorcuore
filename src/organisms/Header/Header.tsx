import React, { useState, useCallback, useEffect } from 'react';
import {
  Box,
  Heading,
  Flex,
  useTheme,
  Button,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  Popover,
  List,
  ListItem,
} from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';

import { SideMenu } from '../../molecules/SideMenu/SideMenu';
import { HeaderLinkItem } from './HeaderLinkItem';
import { Link } from '../../atoms/Link/Link';

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
        <Link href="/" _hover={{ textDecoration: 'none' }}>
          Vineria Sorcuore
        </Link>
      </Heading>
      <Flex display={['none', 'none', 'flex', 'flex']}>
        <Box marginRight={theme.space[4]}>
          {[
            { label: 'instagram', href: 'https://www.instagram.com/vineriasorcuore1213/', icon: faInstagram },
            { label: 'facebook', href: 'https://www.facebook.com/vineriasorcuore1213/', icon: faFacebook },
            { label: 'twitter', href: 'https://twitter.com/vineriasorcuore', icon: faTwitter },
            { label: 'youtube', href: 'https://www.youtube.com/channel/UCf_AH6S5UxdRj-Vulta4Vqw', icon: faYoutube },
          ].map((item, i) => (
            <Link
              href={item.href}
              marginX={theme.space[1]}
              key={i}
              _hover={{ textDecoration: 'none' }}
              aria-label={item.label}
              isExternal
            >
              <Button variant="unstyled" aria-label={item.label}>
                <FontAwesomeIcon size="2x" color={theme.colors.green[500]} icon={item.icon} />
              </Button>
            </Link>
          ))}
        </Box>
        <HeaderLinkItem href="/">ホーム</HeaderLinkItem>
        <Popover trigger="hover" usePortal>
          <PopoverTrigger>
            <HeaderLinkItem href="/menu" marginLeft={theme.space[4]}>
              メニュー
            </HeaderLinkItem>
          </PopoverTrigger>
          <PopoverContent width={theme.sizes[48]} zIndex={theme.zIndices.popover} _focus={{ outline: 'none' }}>
            <PopoverArrow />
            <PopoverBody>
              <List styleType="none" spacing={theme.space[2]} paddingY={theme.space[2]}>
                <ListItem>
                  <HeaderLinkItem href="/menu/course">コース</HeaderLinkItem>
                </ListItem>
                <ListItem>
                  <HeaderLinkItem href="/menu/a-la-carte">アラカルト</HeaderLinkItem>
                </ListItem>
                <ListItem>
                  <HeaderLinkItem href="/menu/takeout">テイクアウト</HeaderLinkItem>
                </ListItem>
              </List>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <HeaderLinkItem href="/reservation" marginLeft={theme.space[4]}>
          ご予約
        </HeaderLinkItem>
      </Flex>
      <Button
        display={['block', 'block', 'none', 'none']}
        p={0}
        aria-label="メニューを開く"
        background="transparent"
        onClick={onClick}
      >
        <FontAwesomeIcon icon={faBars} color={theme.colors.green[500]} />
      </Button>
      <SideMenu isOpen={isSideMenuShow} onClose={onClose} />
    </Flex>
  );
};
