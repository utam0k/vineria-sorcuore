import React, { useMemo, useCallback } from 'react';
import { Text, Badge, Flex, Box, Image, useTheme, BoxProps } from '@chakra-ui/core';
import { Number } from '../../atoms/Number/Number.component';

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
} & Omit<BoxProps, 'onClick'>;

export const Card: React.FC<Props> = ({ imageUrl, imageAlt, title, cost, description, badges, onClick, ...props }) => {
  const theme = useTheme();

  const onCardClick = useCallback(() => {
    onClick(title, imageUrl);
  }, [title, imageUrl, onClick]);

  const deliveryBadge = useMemo(() => {
    if (badges.isDeliverable) {
      return (
        <Badge rounded="full" variant="outline" marginRight={theme.space[1]} paddingX="2" variantColor="orange">
          地方発送可
        </Badge>
      );
    }
    return null;
  }, [badges.isDeliverable]);

  const frozenBadge = useMemo(() => {
    if (badges.isFrozen) {
      return (
        <Badge rounded="full" variant="outline" marginRight={theme.space[1]} paddingX="2" variantColor="teal">
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
        <Text fontSize="base">
          ￥<Number>{cost.price}</Number>
        </Text>
      </Flex>
    );
  }, [cost]);

  return (
    <Box
      maxWidth={[theme.sizes.xs, theme.sizes.xs, theme.sizes.sm, theme.sizes.sm]}
      borderWidth="1px"
      overflow="hidden"
      rounded="lg"
      cursor="pointer"
      onClick={onCardClick}
      marginBottom={theme.space[4]}
      {...props}
    >
      <Image alt={imageAlt ? imageAlt : title} src={imageUrl} width="sm" height="2xs" objectFit="cover" />
      <Box padding={theme.space[6]} height={theme.sizes[40]}>
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
