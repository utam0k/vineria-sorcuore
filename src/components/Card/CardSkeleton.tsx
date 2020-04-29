import React from 'react';
import { Skeleton, Box, useTheme } from '@chakra-ui/core';

export const CardSkeleton: React.FC = () => {
  const theme = useTheme();

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      margin="auto"
      overflow="hidden"
      rounded="lg"
      cursor="pointer"
      marginBottom={theme.space[4]}
    >
      <Skeleton width="sm" height="2xs" />
      <Box p="6" height={theme.sizes[40]} objectFit="cover">
        <Skeleton rounded="full" px="2" width={theme.sizes[24]} height="6" />
        <Skeleton mt="1" height="1.5em" width="100%" flexGrow={1} />
        <Skeleton height="1.5em" width="100%" flexGrow={1} />
      </Box>
    </Box>
  );
};
