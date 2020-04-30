import React, { useMemo } from 'react';
import { Heading, Text, Flex, Box, Image, useTheme } from '@chakra-ui/core';

type Props = {
  image: {
    url: string;
    alt: string;
  };
  reverse?: boolean;
  backgroundColor?: string;
  color?: string;
  title: string;
  text?: string;
};

export const Section: React.FC<Props> = ({ children, image, title, text, reverse = false, backgroundColor, color }) => {
  const theme = useTheme();

  const bc = useMemo(() => {
    if (reverse) {
      return backgroundColor || theme.colors.green[500];
    }
    return backgroundColor;
  }, [backgroundColor]);

  const textColor = useMemo(() => {
    if (reverse && !backgroundColor) {
      return color || theme.colors.white;
    }
    return color;
  }, [color]);

  return (
    <Flex
      as="section"
      flexWrap={[reverse ? 'wrap-reverse' : 'wrap', reverse ? 'wrap-reverse' : 'wrap', 'nowrap', 'nowrap']}
      align="center"
      justify="center"
      width="100vw"
      minHeight="50vh"
      paddingX={theme.space[8]}
      paddingY={theme.space[24]}
      backgroundColor={bc}
    >
      {reverse ? (
        <>
          <Box width={theme.sizes.lg} marginRight={[0, 0, theme.space[16], theme.space[16]]}>
            <Heading
              textAlign="center"
              fontSize={[
                theme.fontSizes['3xl'],
                theme.fontSizes['3xl'],
                theme.fontSizes['5xl'],
                theme.fontSizes['5xl'],
              ]}
              color={textColor}
              fontWeight="normal"
              marginBottom={theme.space[4]}
            >
              {title}
            </Heading>
            <Text color={textColor} whiteSpace="pre-wrap" overflowWrap="break-word" wordBreak="break-all">
              {text}
            </Text>
            {children}
          </Box>
          <Flex width={theme.sizes.lg} marginBottom={theme.space[8]} justify="center" align="center">
            <Image
              alt={image.alt}
              width="100%"
              height={[theme.sizes[40], '100%', '100%', '100%']}
              objectFit="cover"
              src={image.url}
            />
          </Flex>
        </>
      ) : (
        <>
          <Flex width={theme.sizes.lg} marginBottom={theme.space[8]} justify="center" align="center">
            <Image
              alt={image.alt}
              width="100%"
              height={[theme.sizes[40], '100%', '100%', '100%']}
              objectFit="cover"
              src={image.url}
            />
          </Flex>
          <Box width={theme.sizes.lg} marginLeft={[0, 0, theme.space[16], theme.space[16]]}>
            <Heading
              textAlign="center"
              fontSize={[
                theme.fontSizes['3xl'],
                theme.fontSizes['3xl'],
                theme.fontSizes['5xl'],
                theme.fontSizes['5xl'],
              ]}
              color="#4c4c4c"
              fontWeight="normal"
              marginBottom={theme.space[4]}
            >
              {title}
            </Heading>
            <Text color="#555555" whiteSpace="pre-wrap" overflowWrap="break-word" wordBreak="break-all">
              {text}
            </Text>
            {children}
          </Box>
        </>
      )}
    </Flex>
  );
};
