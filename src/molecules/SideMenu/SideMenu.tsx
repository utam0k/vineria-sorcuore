import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  DrawerHeader,
  ListItem,
  List,
  useTheme,
} from '@chakra-ui/core';
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
              <LinkItem href="/store-information">店舗情報</LinkItem>
            </ListItem>
            <ListItem>
              <LinkItem href="/reservation">ご予約</LinkItem>
            </ListItem>
          </List>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
