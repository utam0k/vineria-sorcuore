import React from 'react';
import { Flex, Box, useTheme } from '@chakra-ui/core';

import { Layout } from '../templates/Layout/Layout';

const Access = () => {
  const theme = useTheme();
  return (
    <Layout>
      <Flex align="center" justify="center">
        <Box width={theme.sizes['xl']} height={theme.sizes['xl']}>
          <iframe
            frameBorder="0"
            style={{ width: '100%', height: '100%' }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3338982668247!2d139.79703251566926!3d35.69340013691105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x601889d9c651f49b%3A0xd05466b3466c9acb!2z44O044Kj44ON44Oq44KiIOOCveODq-OCr-OCquODvOODrFZpbmVyaWEgU29yY3VvcmU!5e0!3m2!1sja!2sjp!4v1588411529012!5m2!1sja!2sjp"
          ></iframe>
        </Box>
      </Flex>
    </Layout>
  );
};

export default Access;
