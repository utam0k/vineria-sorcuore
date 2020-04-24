import React from 'react';
import { Layout } from '../templates/Layout/Layout';
import { Description } from '../organisms/Description/Description';
import { Instagrams } from '../organisms/Instagrams/Instagrams';

const Home = () => (
  <Layout position="fixed" needGradation>
    <Description />
    <Instagrams />
  </Layout>
);

export default Home;
