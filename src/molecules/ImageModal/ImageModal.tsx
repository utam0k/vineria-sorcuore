import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalFooter, Image, Heading, Button } from '@chakra-ui/core';

type Props = {
  isOpen: boolean;
  title: string;
  imageUrl?: string;
  onClose: () => void;
};

export const ImageModal: React.FC<Props> = ({ isOpen, title, imageUrl, onClose }) => {
  return (
    <Modal isOpen={!!(isOpen && imageUrl)} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalBody>
          <Image src={imageUrl} />
        </ModalBody>
        <ModalFooter>
          <Heading as="h1">{title}</Heading>
          <Button onClick={onClose}>close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
