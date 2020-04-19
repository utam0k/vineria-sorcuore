import React from 'react';
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody, DrawerHeader } from '@chakra-ui/core';
import { MenuItem } from '../MenuItem/MenuItem';

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
          <MenuItem href="/">ホーム</MenuItem>
          <MenuItem href="/menu">メニュー</MenuItem>
          <MenuItem href="/reservation">ご予約</MenuItem>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
