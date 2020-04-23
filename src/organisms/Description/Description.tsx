import React from 'react';
import { useState, useEffect } from 'react';
import { Heading, useTheme, Box, Flex, Button } from '@chakra-ui/core';
import { BackgroundImage } from '../../atoms/BackgroundImage/BackgroundImage';
import NextLink from 'next/link';

// TODO: Timeout(https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c)
function useWindowSize() {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined,
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      // return false;
      return;
    }

    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

export const Description = () => {
  const theme = useTheme();
  const windowSize = useWindowSize();
  const height = windowSize.height && windowSize.height > 1000 ? windowSize.height : 1000;

  return (
    <Box
      position="relative"
      width="100%"
      height={height}
      maxHeight="fit-content"
      minHeight="fit-content"
      overflow="hidden"
    >
      <BackgroundImage imageUrl="http://u0u0.net/Yep3" overlayColor="#54140d" />
      <Box display="block" width="100%" marginTop="100px" textAlign="center">
        <Heading as="h1" size="2xl" marginBottom="28px" display="block" color="#fff">
          笑顔になれる楽しい本格イタリアン
        </Heading>
        <Flex flexWrap="wrap" justify="center" align="center" margin-top="20%" height="350px">
          <Box
            backgroundColor="rgba(255, 255, 255, 0.7)"
            display="block"
            flex-direction="column"
            rounded={4}
            margin="8px"
            padding={theme.space[8]}
            maxWidth="sm"
            top="25%"
            left={{ sm: 0, lg: '8%' }}
            height="100%"
          >
            <Heading as="h2" fontSize="small" margin={`0 0 0 16px`} fontFamily="'Kosugi Maru'">
              ヴィネリアソルクオーレ
            </Heading>
            <Heading
              m="8px 0"
              as="h1"
              marginBottom="16px"
              fontWeight="normal"
              fontStyle="italic"
              fontFamily="'Libre Baskerville'"
            >
              Vineria Sorcuor
            </Heading>
            <Box display="block" whiteSpace="pre-wrap" fontSize="sm" letterSpacing={0.5}>
              {`イタリア語で SORRISO (笑顔) CUORE (心)\nかけ合わせて作った造語それがソルクオーレです。\n心を込めて笑顔になれる楽しい本格イタリアンをお客様にお届けします。ぜひ、素敵な時間をお過ごしください。`}
            </Box>
            <NextLink href="/menu">
              <Button marginTop={theme.space[6]} variantColor="teal" variant="solid" width="155px">
                メニューを見る
              </Button>
            </NextLink>
          </Box>

          <Box
            backgroundColor="rgba(255, 255, 255, 0.7)"
            display="block"
            flex-direction="column"
            rounded={4}
            maxWidth="sm"
            margin="8px"
            padding={theme.space[8]}
            top="25%"
            left={{ sm: 0, lg: '8%' }}
            height="100%"
          >
            <Heading as="h2" fontSize="small" margin={`0 0 0 16px`} fontFamily="'Kosugi Maru'">
              こだわり
            </Heading>
            <Heading
              m="8px 0"
              as="h1"
              fontWeight="normal"
              marginBottom="16px"
              fontStyle="italic"
              fontFamily="'Libre Baskerville'"
            >
              Commitment
            </Heading>
            <Box display="block" whiteSpace="pre-wrap" fontSize="sm" letterSpacing={0.5}>
              {`イタリア滞在経験のあるシェフ神谷がお料理をご提供します。シェフ自ら、契約農家に足を運び厳選した食材でイタリアの郷土料理の味を再現し、冬にはジビエやトリュフ、春には野菜を使ったりと季節によってワインのマリアージュを考えています。`}
            </Box>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJuTZyj2bUAjQgzpw8p86qmgYIjn4HnJA_JumEscltATE8qg/viewform">
              <Button marginTop={theme.space[6]} variantColor="teal" variant="solid" width="155px">
                テイクアウト
              </Button>
            </a>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
