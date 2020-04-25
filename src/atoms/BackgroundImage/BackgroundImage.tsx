import React from 'react';
import { Box } from '@chakra-ui/core';

type Props = {
  imageUrl: string;
  overlayColor?: string;
  blur?: number;
};

export const BackgroundImage: React.FC<Props> = ({ imageUrl, overlayColor = '#000000', blur = 0 }) => (
  <>
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      zIndex={-2}
      style={blur ? { filter: `blur(${blur}px)` } : {}}
      margin={blur ? `-${blur}px` : 'none'}
      backgroundPosition="center"
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
      backgroundColor={overlayColor}
      opacity={0.24}
      pointerEvents="none"
    />
  </>
);
