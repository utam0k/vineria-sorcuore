import React from 'react';
import { useTheme, Box, ThemeProvider, Heading, CSSReset } from '@chakra-ui/core';

import { Header } from '../components/Header/Header';

const Description = () => {
  const theme = useTheme();

  return (
    <Box py={theme.space[24]} marginBottom="10%" position="relative">
      <Box
        position="absolute"
        top="-3px"
        left="-3px"
        right="-3px"
        bottom="-3px"
        zIndex={-1}
        width="100%"
        height="100%"
        style={{ filter: 'blur(2px)' }}
        backgroundPosition="center"
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
        backgroundColor="orange.100"
        opacity={0.3}
        pointerEvents="none"
      />
      <Box
        backgroundColor="rgba(255, 255, 255, 0.4)"
        display="inline-block"
        padding={theme.space[4]}
        rounded={4}
        minWidth="sm"
      >
        <Box margin={`${theme.space[3]} 0 0`} as="h3" fontWeight="semibold" fontStyle="italic">
          Vineria Sorcuor
        </Box>
        <Box margin={`${theme.space[2]} 0 0`}>
          <Heading as="h2" size="lg">
            ヴィネリアソルクオーレ
          </Heading>
        </Box>
        <Box margin="10px 0 0" whiteSpace="pre-wrap" fontSize="sm" letterSpacing={0.5}>
          {`イタリア語でSORRISO 笑顔 CUORE 心\nかけ合わせて作った造語それがソルクオーレです。\n心を込めて笑顔になれる楽しい本格イタリアンをお客様にお届けします。ぜひ、素敵な時間をお過ごしください。`}
        </Box>
      </Box>
    </Box>
  );
};

const Home = () => (
  <ThemeProvider>
    <CSSReset />
    <Header />
    <Description />
  </ThemeProvider>
);

export default Home;
