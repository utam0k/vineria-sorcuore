import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Heading, useTheme, Flex } from '@chakra-ui/core';
import { BackgroundImage } from '../../atoms/BackgroundImage/BackgroundImage';
import { DescriptionItem } from './DescriptionItem';
import { useWindowSize } from '../../utils/hooks/useWindowSize';

export const Description = () => {
  const theme = useTheme();
  const windowSize = useWindowSize();
  const ref = useRef<HTMLElement>(null);

  const [height, setHeight] = useState<number>(-1);

  useEffect(() => {
    if (!ref.current || !windowSize.height || !windowSize.width) return;

    if (windowSize.width > windowSize.height) {
      setHeight(-1);
      return;
    }

    const clientHeight = ref.current.scrollHeight;
    if (clientHeight > windowSize.height) {
      setHeight(clientHeight);
      return;
    }
    setHeight(windowSize.height);
  }, [windowSize, ref]);

  return (
    <Flex
      as="section"
      position="relative"
      align="center"
      justify="center"
      width="100%"
      direction="column"
      height={height}
      minHeight="100vh"
      overflow="hidden"
      ref={ref}
    >
      <BackgroundImage imageUrl="http://u0u0.net/Yep3" overlayColor="#54140d" />
      <Heading
        as="h1"
        size="2xl"
        textAlign="center"
        marginTop={theme.space[24]}
        marginX={theme.space[1]}
        color={theme.colors.white}
      >
        笑顔になれる楽しい本格イタリアン
      </Heading>
      <Flex
        flexWrap="wrap"
        justify="center"
        align="center"
        width="100%"
        marginTop={theme.space[8]}
        marginBottom={theme.space[12]}
      >
        <DescriptionItem
          label="ヴィネリアソルクオーレ"
          title="Vineria Sorcuor"
          link={{ label: 'メニューを見る', url: '/menu' }}
        >
          {
            'イタリア語で SORRISO (笑顔) CUORE (心)\nかけ合わせて作った造語それがソルクオーレです。\n心を込めて笑顔になれる楽しい本格イタリアンをお客様にお届けします。ぜひ、素敵な時間をお過ごしください。'
          }
        </DescriptionItem>
        <DescriptionItem
          label="こだわり"
          title="Commitment"
          link={{
            label: 'テイクアウト',
            url: 'https://docs.google.com/forms/d/e/1FAIpQLSfJuTZyj2bUAjQgzpw8p86qmgYIjn4HnJA_JumEscltATE8qg/viewform',
            external: true,
          }}
        >
          {`イタリア滞在経験のあるシェフ神谷がお料理をご提供します。\nシェフ自ら、契約農家に足を運び厳選した食材でイタリアの郷土料理の味を再現し、冬にはジビエやトリュフ、春には野菜を使ったりと季節によってワインのマリアージュを考えています。`}
        </DescriptionItem>
      </Flex>
    </Flex>
  );
};
