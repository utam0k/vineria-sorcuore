import React, { useMemo, useCallback } from 'react';
import { Text, Badge, Flex, Box, Image, useTheme } from '@chakra-ui/core';

type Props = {
  imageUrl: string;
  imageAlt?: string;
  title: string;
  description: string;
  cost: {
    price: number;
    amount: string;
  };
  badges: {
    isDeliverable: boolean;
    isFrozen: boolean;
  };
  onClick: (title: string, imageUrl: string) => void;
};

export const Card: React.FC<Props> = ({ imageUrl, imageAlt, title, cost, description, badges, onClick }) => {
  const theme = useTheme();

  const onCardClick = useCallback(() => {
    onClick(title, imageUrl);
  }, [title, imageUrl, onClick]);

  const frozenBadge = useMemo(() => {
    if (badges.isFrozen) {
      return (
        <Badge marginX={theme.space[1]} rounded="full" variant="outline" px="2" variantColor="teal">
          冷凍真空パック済
        </Badge>
      );
    }
    return null;
  }, [badges.isFrozen]);

  const costText = useMemo(() => {
    const space = cost.amount.length === 0 ? theme.space[0] : theme.space[2];
    return (
      <Flex justifyContent="center">
        <Text fontSize="base">{cost.amount}</Text>
        <Box marginRight={space} />
        <Text fontSize="base">￥{cost.price}</Text>
      </Flex>
    );
  }, [cost]);

  const deliveryBadge = useMemo(() => {
    if (badges.isDeliverable) {
      return (
        <Badge marginX={theme.space[1]} rounded="full" variant="outline" px="2" variantColor="orange">
          地方発送可
        </Badge>
      );
    }
    return null;
  }, [badges.isDeliverable]);

  return (
    <Box
      maxW="sm"
      borderWidth="1px"
      margin="auto"
      overflow="hidden"
      rounded="lg"
      cursor="pointer"
      onClick={onCardClick}
      marginBottom={theme.space[4]}
    >
      <Image alt={imageAlt ? imageAlt : title} src={imageUrl} width="sm" height="2xs" objectFit="cover" />
      <Box p="6" height={theme.sizes[40]}>
        <Flex height="18px">
          {deliveryBadge}
          {frozenBadge}
        </Flex>

        <Flex alignItems="baseline" marginTop="1px">
          <Text fontWeight="semibold" as="h4" lineHeight="tight" flexGrow={1} isTruncated textAlign="center">
            {title}
          </Text>
        </Flex>
        {costText}

        <Box as="span" color="gray.600" fontSize="sm">
          {description}
        </Box>
      </Box>
    </Box>
  );
};
