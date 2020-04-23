import { theme, DefaultTheme } from '@chakra-ui/core';

export const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: "'Libre Baskerville', 'Kosugi Maru', sans-serif",
    heading: "'Libre Baskerville', 'Kosugi Maru', sans-serif",
  },
};
