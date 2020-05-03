import React, { forwardRef } from 'react';
import NextLink from 'next/link';
import { Link as ChakraLink, LinkProps } from '@chakra-ui/core';

type Props = { href: string } & LinkProps;

export const Link = forwardRef<HTMLAnchorElement, Props>(({ href, ...props }, ref) => (
  <NextLink href={href}>
    <ChakraLink {...props} _focus={{ outline: 'none' }} href={href} ref={ref} />
  </NextLink>
));
