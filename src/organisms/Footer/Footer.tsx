import React, { FC } from 'react';
import { Flex, useTheme } from '@chakra-ui/core';
import { Link } from '../../atoms/Link/Link';

export const Footer: FC = () => {
  const theme = useTheme();
  return (
    <Flex
      height={theme.sizes[16]}
      paddingX={theme.space[16]}
      alignItems="center"
      justifyContent="flex-end"
      backgroundColor={theme.colors.white}
    >
      <Link href="/privacypolicy">プライバシーポリシー</Link>
    </Flex>
  );
};
