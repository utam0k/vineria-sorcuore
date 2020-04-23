import React from 'react';
import { Box, Text, Heading, useTheme, Button, Link } from '@chakra-ui/core';
import NextLink from 'next/link';

type Props = {
  label: string;
  title: string;
  link: {
    label: string;
    url: string;
    external?: boolean;
  };
};

export const DescriptionItem: React.FC<Props> = ({ label, title, link, children }) => {
  const theme = useTheme();
  return (
    <Box
      as="article"
      position="relative"
      backgroundColor="rgba(255, 255, 255, 0.7)"
      width={theme.sizes.sm}
      height={theme.sizes.sm}
      margin={theme.space[2]}
      padding={theme.space[4]}
      textAlign="center"
      rounded={4}
    >
      <Text fontSize="xs" marginBottom={theme.space[3]}>
        {label}
      </Text>
      <Heading as="h1" fontWeight="normal" fontStyle="italic">
        {title}
      </Heading>
      <Text
        fontSize="sm"
        fontWeight="300"
        whiteSpace="pre-wrap"
        overflowWrap="break-word"
        textAlign="left"
        marginTop={theme.space[6]}
        lineHeight="1.8em"
      >
        {children}
      </Text>
      {link.external ? (
        <Link href={link.url}>
          <Button
            position="absolute"
            left="50%"
            bottom={theme.space[4]}
            variantColor="teal"
            transform="translateX(-50%)"
          >
            {link.label}
          </Button>
        </Link>
      ) : (
        <NextLink href={link.url}>
          <Button
            position="absolute"
            left="50%"
            bottom={theme.space[4]}
            variantColor="teal"
            transform="translateX(-50%)"
          >
            {link.label}
          </Button>
        </NextLink>
      )}
    </Box>
  );
};
