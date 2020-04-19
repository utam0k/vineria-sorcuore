import React from 'react';
import { useTheme, Link } from '@chakra-ui/core';
import NextLink from 'next/link';

export const MenuItem: React.FC<{ href: string }> = ({ href, children }) => {
  const theme = useTheme();

  return (
    <NextLink href={href}>
      <Link d="block" px={theme.space[4]} py={theme.space[2]}>
        {children}
      </Link>
    </NextLink>
  );
};
