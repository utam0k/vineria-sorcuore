import React, { forwardRef } from 'react';
import { useTheme, Link } from '@chakra-ui/core';
import NextLink from 'next/link';

type Props = { href: string } & React.ComponentProps<typeof Link>;

export const LinkItem = forwardRef<HTMLAnchorElement, Props>(({ href, children, ...props }, ref) => {
  const theme = useTheme();

  return (
    <NextLink href={href}>
      <Link {...props} d="block" px={theme.space[4]} py={theme.space[2]} ref={ref}>
        {children}
      </Link>
    </NextLink>
  );
});
