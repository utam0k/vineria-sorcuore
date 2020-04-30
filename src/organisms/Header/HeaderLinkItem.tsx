import React, { forwardRef } from 'react';
import { useTheme, LinkProps } from '@chakra-ui/core';
import { LinkItem } from '../../atoms/LinkItem/LinkItem';

type Props = { href: string; children: React.ReactNode } & LinkProps;

export const HeaderLinkItem = forwardRef<HTMLAnchorElement, Props>(({ href, children, ...props }, ref) => {
  const theme = useTheme();

  return (
    <LinkItem
      {...props}
      href={href}
      display="block"
      paddingX={theme.space[4]}
      paddingY={theme.space[2]}
      color={theme.colors.green[500]}
      fontWeight="bold"
      textAlign="center"
      border="2px solid"
      borderColor={theme.colors.green[500]}
      rounded={24}
      _hover={{
        color: theme.colors.white,
        backgroundColor: theme.colors.green[500],
      }}
      ref={ref}
    >
      {children}
    </LinkItem>
  );
});
