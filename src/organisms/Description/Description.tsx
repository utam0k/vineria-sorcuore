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
      direction="column"
      height={height}
      minHeight="100vh"
      overflow="hidden"
      ref={ref}
    >
      <BackgroundImage imageUrl="https://lh3.googleusercontent.com/DA704PWoPSzPemo3wHeFThNhaiF-tWVQQOxhQOOjafI7GSvr7smKUKODeciS_VY1FtOlFhq-_TZ7wqxQH9fSAik9tzXG7WNL-cpfwbxi3Oi6ycah5zDpFoEyLr78VTITz3snuNzMDA" />
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
          title="Vineria Sorcuore"
          link={{ label: 'メニューを見る', url: '/menu' }}
        >
          {
            '～心から笑顔になれるイタリアン～\nお客様に素敵な時間を過ごして頂きたい気持ちから作った造語\nソリーゾ：笑顔  ×  クオーレ：心 ＝ ソルクオーレ'
          }
        </DescriptionItem>
        <DescriptionItem
          label="こだわり"
          title="Commitment"
          link={{
            label: '予約する',
            url: '/reservation',
          }}
        >
          {`イタリア滞在経験のあるシェフ神谷がお料理をご提供します。\nシェフ自ら、契約農家に足を運び厳選した食材でイタリアの郷土料理の味を再現し、冬にはジビエやトリュフ、春には野菜を使ったりと季節によってワインのマリアージュを考えています。`}
        </DescriptionItem>
      </Flex>
    </Flex>
  );
};
