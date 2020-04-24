import React from 'react';
import { Badge, Box, Image, useTheme } from '@chakra-ui/core';

type Props = {
  imageUrl: string;
  imageAlt: string;
  title: string;
  description: string;
  price: number;
  onImageClick?: (title: string, imageUrl: string) => void;
};

export const Card: React.FC<Props> = ({ imageUrl, imageAlt, title, price, description, onImageClick }) => {
  const theme = useTheme();

  return (
    <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden" margin="auto">
      <Image
        alt={imageAlt}
        src={imageUrl}
        width="sm"
        height="2xs"
        objectFit="cover"
        onClick={() => onImageClick && onImageClick(title, imageUrl)}
      />
      <Box p="6" height={theme.sizes[40]}>
        <Box d="flex" alignItems="baseline">
          <Badge rounded="full" variant="outline" px="2" variantColor="orange">
            地方発送可
          </Badge>
          <Badge rounded="full" variant="outline" px="2" variantColor="teal" marginLeft={theme.space[1]}>
            冷凍真空パック済
          </Badge>
        </Box>

        <Box d="flex" alignItems="baseline">
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" flexGrow={1} isTruncated>
            {title}
          </Box>
          <Box flex-grow="1"> ￥{price} </Box>
        </Box>

        <Box as="span" color="gray.600" fontSize="sm">
          {description}
        </Box>
      </Box>
    </Box>
  );
};
