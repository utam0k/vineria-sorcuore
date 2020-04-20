import React from 'react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, DrawerHeader } from '@chakra-ui/core';
import { LinkItem } from '../../atoms/LinkItem/LinkItem';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const SideMenu: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Drawer isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader />
        <DrawerBody>
          <LinkItem href="/">ホーム</LinkItem>
          <LinkItem href="/menu">メニュー</LinkItem>
          <LinkItem href="/reservation">ご予約</LinkItem>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
