import React from 'react';
import { addDecorator } from '@storybook/react';
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
