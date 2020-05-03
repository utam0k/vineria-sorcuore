import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';
import { customTheme } from '../src/theme';

addDecorator((storyFn) => (
  <ThemeProvider theme={customTheme}>
    <CSSReset />
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        body {
          font-family: 'Libre Baskerville', 'Kosugi Maru', sans-serif;
          overflow-x: hidden;
        }
      `}
    />
    {storyFn()}
  </ThemeProvider>
));

const newViewports = {
  iPhoneX: {
    name: 'iPhoneX',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  iPad: {
    name: 'iPad',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
};

addParameters({
  viewport: { viewports: newViewports },
});
