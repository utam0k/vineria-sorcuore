import React from 'react';
import { useTheme, Box, Heading } from '@chakra-ui/core';
import { BackgroundImage } from '../../atoms/BackgroundImage/BackgroundImage';

export const Description = () => {
  const theme = useTheme();

  return (
    <Box position="relative" width="100%" height="100vh" overflow="hidden">
      <BackgroundImage imageUrl="http://u0u0.net/Yep3" overlayColor="#54140d" />
      <Box
        backgroundColor="rgba(255, 255, 255, 0.4)"
        display="inline-block"
        padding={theme.space[4]}
        rounded={4}
        minWidth="sm"
        position="absolute"
        top="25%"
        left={{ sm: 0, lg: '8%' }}
        transform="translateY(-50%)"
      >
        <Box display="inline-block">
          <Heading as="h2" fontSize="small" margin={`0 0 0 16px`} fontFamily="'Kosugi Maru'">
            ヴィネリアソルクオーレ
          </Heading>
          <Heading
            display="inline-block"
            m="8px 0"
            as="h1"
            fontWeight="normal"
            fontStyle="italic"
            fontFamily="'Libre Baskerville'"
          >
            Vineria Sorcuor
          </Heading>
        </Box>
        <Box whiteSpace="pre-wrap" fontSize="sm" letterSpacing={0.5}>
          {`イタリア語で SORRISO (笑顔) CUORE (心)\nかけ合わせて作った造語それがソルクオーレです。\n心を込めて笑顔になれる楽しい本格イタリアンをお客様にお届けします。ぜひ、素敵な時間をお過ごしください。`}
        </Box>
      </Box>
    </Box>
  );
};
