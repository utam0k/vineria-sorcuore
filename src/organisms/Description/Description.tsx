import React from 'react';
import { useTheme, Box, Heading } from '@chakra-ui/core';

export const Description = () => {
  const theme = useTheme();

  return (
    <Box position="relative" width="100vw" height="100vh" overflow="hidden">
      <Box
        position="absolute"
        top="-8px"
        left="-8px"
        right="-8px"
        bottom="-8px"
        zIndex={-1}
        style={{ filter: 'blur(4px)' }}
        backgroundPosition="center 80%"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        backgroundImage="url(https://jimdo-storage.freetls.fastly.net/image/58320648/3f512aac-76f4-42c5-8833-5350694f1c56.jpg?format=pjpg&quality=80&auto=webp&disable=upscale&width=1920&height=1440)"
        pointerEvents="none"
      />
      <Box
        position="absolute"
        top="0"
        left="0"
        zIndex={0}
        width="100%"
        height="100%"
        backgroundColor="#54140d"
        opacity={0.24}
        pointerEvents="none"
      />
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
