import React from 'react';
import { Box } from '@chakra-ui/core';

type Props = {
  imageUrl: string;
  overlayColor: string;
};

export const BackgroundImage: React.FC<Props> = ({ imageUrl, overlayColor }) => (
  <>
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex={-2}
      style={{ filter: 'blur(4px)' }}
      backgroundPosition="center 80%"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
      backgroundImage={`url(${imageUrl})`}
      pointerEvents="none"
    />
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex={-1}
      width="100%"
      height="100%"
      backgroundColor={overlayColor}
      opacity={0.24}
      pointerEvents="none"
    />
  </>
);
