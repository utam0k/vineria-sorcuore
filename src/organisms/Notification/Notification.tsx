import React, { useEffect } from 'react';
import { Box, Alert, AlertIcon, AlertDescription, Link, CloseButton, useToast } from '@chakra-ui/core';

import { Notice } from '../../models/notice';

type Props = {
  desc: string;
  link: string;
  status: Notice['type'];
};

export const Notification: React.FC<Props> = ({ desc, link, status }) => {
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
              status={status}
              textAlign="left"
              boxShadow="lg"
              rounded="md"
              alignItems="start"
              marginX={1}
              marginBottom={2}
              paddingRight={8}
            >
              <AlertIcon />
              <Box flex="1">
                <Link href={link} textDecoration="underline" isExternal>
                  <AlertDescription fontSize="sm" fontWeight="normal" whiteSpace="pre-wrap" overflowWrap="break-word">
                    {desc}
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
