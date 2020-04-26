import React from 'react';
import { Box, Text, Heading, useTheme, Button, Link, Icon } from '@chakra-ui/core';
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
      width={theme.sizes.md}
      minHeight={theme.sizes.xs}
      margin={theme.space[2]}
      padding={theme.space[4]}
      textAlign="center"
      rounded={4}
    >
      <Text fontSize="xs" marginTop={theme.space[3]}>
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
        marginTop={theme.space[5]}
        marginBottom="32px"
        lineHeight="1.8em"
      >
        {children}
      </Text>
      {link.external ? (
        <Link
          href={link.url}
          _hover={{
            textDecoration: 'none',
          }}
        >
          <Button variantColor="teal">
            {link.label}
            <Icon name="external-link" mx="2px" />
          </Button>
        </Link>
      ) : (
        <NextLink href={link.url}>
          <Button variantColor="teal">{link.label}</Button>
        </NextLink>
      )}
    </Box>
  );
};
