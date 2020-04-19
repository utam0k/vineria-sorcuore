import React from 'react';
import { ThemeProvider, Heading, CSSReset } from '@chakra-ui/core';

import { Header } from '../components/Header/Header';

const Home = () => (
  <ThemeProvider>
    <CSSReset />
    <Header />
    <Heading>Vineria Sorcuor</Heading>
  </ThemeProvider>
);

export default Home;
