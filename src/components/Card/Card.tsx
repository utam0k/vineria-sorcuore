import React from 'react';
import { Badge, Box, Image } from '@chakra-ui/core';

type Props = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  price: number;
};

export const Card: React.FC<Props> = ({ imageUrl, imageAlt, title, price, description }) => (
  <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" margin="auto">
    <Image alt={imageAlt} src={imageUrl} />
    <Box p="6">
      <Box d="flex" alignItems="baseline">
        <Badge rounded="full" px="2" variantColor="teal">
          地方発送可
        </Badge>
      </Box>

      <Box d="flex" alignItems="baseline">
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" flexGrow={1} isTruncated>
          {title}
        </Box>
        <Box flex-grow="1"> ￥{price} </Box>
      </Box>

      <Box as="span" color="gray.600" fontSize="sm">
        {' '}
        {description}{' '}
      </Box>
    </Box>
  </Box>
);
