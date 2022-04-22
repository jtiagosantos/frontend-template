import { extendTheme, Theme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {},
  },
  fonts: {
    body: '',
    heading: '',
    mono: '',
  },
  colors: {},
} as Theme | Record<string, unknown>);
