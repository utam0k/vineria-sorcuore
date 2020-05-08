import { theme, DefaultTheme } from '@chakra-ui/core';

export const customTheme: DefaultTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: "'Questrial', 'M PLUS 1p', sans-serif",
    heading: "'Questrial', 'Libre Baskerville', 'M PLUS 1p', sans-serif",
  },
};
