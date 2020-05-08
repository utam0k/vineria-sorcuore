import React from 'react';
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  Text,
  ListItem,
  List,
  Link,
  useTheme,
} from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

import { LinkItem } from '../../atoms/LinkItem/LinkItem';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SideMenu: React.FC<Props> = ({ isOpen, onClose }) => {
  const theme = useTheme();
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton aria-label="メニューを閉じる" />
        <DrawerHeader />
        <DrawerBody>
          <List>
            <ListItem>
              <LinkItem href="/">ホーム</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="/menu">メニュー</LinkItem>
              <List marginLeft={theme.space[4]}>
                <ListItem>
                  <LinkItem href="/menu/course">コース</LinkItem>
                </ListItem>
                <ListItem>
                  <LinkItem href="/menu/a-la-carte">アラカルト</LinkItem>
                </ListItem>
                <ListItem>
                  <LinkItem href="/menu/takeout">テイクアウト</LinkItem>
                </ListItem>
              </List>
            </ListItem>
            <ListItem>
              <LinkItem href="/reservation">ご予約</LinkItem>
            </ListItem>
            {[
              { name: 'Instagram', href: 'https://www.instagram.com/vineriasorcuore1213/', icon: faInstagram },
              { name: 'Facebook', href: 'https://www.facebook.com/vineriasorcuore1213/', icon: faFacebook },
            ].map((item) => (
              <ListItem key={item.name}>
                <LinkItem href={item.href} isExternal>
                  <FontAwesomeIcon icon={item.icon} />
                  <Text marginLeft={theme.space[2]} fontSize={theme.fontSizes.sm} fontWeight={theme.fontWeights.thin}>
                    {item.name}
                  </Text>
                </LinkItem>
              </ListItem>
            ))}
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
