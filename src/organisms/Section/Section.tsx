import React, { useMemo } from 'react';
import { Heading, Text, Flex, Box, Image, useTheme } from '@chakra-ui/core';

type Props = {
  title: string;
  text?: string;
  image: {
    url: string;
    alt: string;
  };
  color?: string;
  backgroundColor?: string;
  reverse?: boolean;
  imageSubstitute?: JSX.Element;
};

export const Section: React.FC<Props> = ({
  children,
  title,
  text,
  image,
  reverse = false,
  backgroundColor,
  color,
  imageSubstitute,
}) => {
  const theme = useTheme();

  const bc = useMemo(() => {
    if (reverse) {
      return backgroundColor || theme.colors.green[700];
    }
    return backgroundColor;
  }, [backgroundColor]);

  const textColor = useMemo(() => {
    if (reverse && !backgroundColor) {
      return color || theme.colors.white;
    }
    return color;
  }, [color]);

  const imageBox = useMemo(
    () => (
      <Flex
        width={theme.sizes.lg}
        marginBottom={[theme.space[8], theme.space[8], 0, 0]}
        justify="center"
        align="center"
      >
        {imageSubstitute || (
          <Image
            alt={image.alt}
            width="100%"
            height={[theme.sizes[40], '100%', '100%', '100%']}
            objectFit="cover"
            src={image.url}
          />
        )}
      </Flex>
    ),
    [image, theme]
  );

  const textBox = useMemo(
    () => (
      <Box
        width={theme.sizes.lg}
        marginLeft={!reverse ? [0, 0, theme.space[16], theme.space[16]] : 0}
        marginRight={reverse ? [0, 0, theme.space[16], theme.space[16]] : 0}
      >
        <Heading
          textAlign="center"
          fontSize={[theme.fontSizes['3xl'], theme.fontSizes['3xl'], theme.fontSizes['5xl'], theme.fontSizes['5xl']]}
          color={textColor}
          fontWeight="normal"
          marginBottom={theme.space[4]}
        >
          {title}
        </Heading>
        {text && (
          <Text color={textColor} whiteSpace="pre-wrap" overflowWrap="break-word" wordBreak="break-all">
            {text}
          </Text>
        )}
        {children}
      </Box>
    ),
    [title, text, children, textColor, theme]
  );

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
          {textBox}
          {imageBox}
        </>
      ) : (
        <>
          {imageBox}
          {textBox}
        </>
      )}
    </Flex>
  );
};
