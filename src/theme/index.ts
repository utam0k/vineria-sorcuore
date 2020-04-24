import { theme, DefaultTheme } from '@chakra-ui/core';

export const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: "'Libre Baskerville', 'M PLUS 1p', sans-serif",
    heading: "'Libre Baskerville', 'M PLUS 1p', sans-serif",
  },
};
