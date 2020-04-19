import React from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Header } from '../components/Header/Header';

const Reservation = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Header />

      <h1>Reservation</h1>
    </ThemeProvider>
  );
};

export default Reservation;
