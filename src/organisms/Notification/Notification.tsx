import React, { useEffect } from 'react';
import { Box, Alert, AlertIcon, AlertDescription, Link, CloseButton, useToast } from '@chakra-ui/core';

export const Notification = () => {
  const toast = useToast();

  useEffect(() => {
    toast({
      position: 'bottom-left',
      duration: null,
      render: ({ onClose }) => {
        return (
          <Box maxWidth="100vw">
            <Alert
              display="flex"
              status="error"
              textAlign="left"
              boxShadow="lg"
              rounded="md"
              alignItems="start"
              margin={2}
              paddingRight={8}
            >
              <AlertIcon />
              <Box flex="1">
                <Link href={'https://www.instagram.com/p/B_B4SjMnyXX/'} textDecoration="underline">
                  <AlertDescription fontSize="sm" fontWeight="normal" whiteSpace="pre-wrap" overflowWrap="break-word">
                    {`新型コロナウィルス感染拡大防止に伴う、店舗営業時間短縮のお知らせ`}
                  </AlertDescription>
                </Link>
              </Box>
              <CloseButton size="sm" onClick={onClose} position="absolute" right="4px" top="4px" aria-label="閉じる" />
            </Alert>
          </Box>
        );
      },
    });
  }, []);

  return null;
};
