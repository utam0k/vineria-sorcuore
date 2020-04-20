import React from 'react';
import { useTheme, Link } from '@chakra-ui/core';
import NextLink from 'next/link';

type Props = { href: string } & React.ComponentProps<typeof Link>;

export const LinkItem: React.FC<Props> = ({ href, children, ...props }) => {
  const theme = useTheme();

  return (
    <NextLink href={href}>
      <Link {...props} d="block" px={theme.space[4]} py={theme.space[2]}>
        {children}
      </Link>
    </NextLink>
  );
};
