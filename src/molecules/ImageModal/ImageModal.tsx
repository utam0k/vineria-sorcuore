import React from 'react';
import {
  useTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalFooter,
  Image,
  Heading,
  IconButton,
} from '@chakra-ui/core';
import { BackgroundImage } from '../../atoms/BackgroundImage/BackgroundImage';

type Props = {
  isOpen: boolean;
  title: string;
  imageUrl: string;
  onClose: () => void;
} & Omit<React.ComponentProps<typeof Modal>, 'children'>;

export const ImageModal: React.FC<Props> = ({ isOpen, title, imageUrl, onClose, ...props }) => {
  const theme = useTheme();

  return (
    <Modal {...props} isOpen={isOpen} size={theme.sizes.full} onClose={onClose} isCentered preserveScrollBarGap>
      <ModalOverlay />
      <ModalContent
        marginX={[theme.sizes[4], theme.sizes[4], theme.space[16], theme.space[16]]}
        width={theme.sizes['4xl']}
        height={[theme.sizes['md'], theme.sizes['md'], theme.sizes['xl'], theme.sizes['xl']]}
        overflow="hidden"
        rounded={4}
      >
        <ModalBody
          position="relative"
          display="flex"
          justifyContent="center"
          width={theme.sizes.full}
          height={theme.sizes.md}
          padding={0}
          overflow="hidden"
        >
          <BackgroundImage imageUrl={imageUrl} overlayColor={theme.colors.black} blur={4} />
          <Image src={imageUrl} width={theme.sizes.full} height={theme.sizes.full} objectFit="contain" />
        </ModalBody>
        <ModalFooter
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          height={theme.sizes[20]}
          paddingY={0}
        >
          <Heading
            as="h1"
            fontSize={[theme.fontSizes.md, theme.fontSizes.md, theme.fontSizes.lg, theme.fontSizes.md]}
            overflowWrap="break-word"
            wordBreak="break-all"
          >
            {title}
          </Heading>
          <IconButton
            icon="close"
            aria-label="モーダルを閉じる"
            marginLeft={theme.space[4]}
            variant="outline"
            variantColor="green"
            _focus={{ outline: 'none' }}
            isRound
            onClick={onClose}
          />
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
