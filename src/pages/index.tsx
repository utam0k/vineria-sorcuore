import React from 'react';
import InstagramEmbed from 'react-instagram-embed';
import { Stack } from '@chakra-ui/core';

import { Layout } from '../templates/Layout/Layout';
import { Description } from '../organisms/Description/Description';

const Instagram = () => (
  <Stack isInline shouldWrapChildren spacing={20} display="inline-block" width="100vw">
    {/* TODO: スプレットシートからidを取ってくるようにする */}
    {['B7pieB3Hd2F', 'B6hi5WyHo8h', 'B8VR5gsHp80'].map((id) => {
      const url = 'https://www.instagram.com/p/' + id;
      return (
        // TODO: spでの表示をもっと考える(件数を減らす？)
        <InstagramEmbed
          key={id}
          url={url}
          maxWidth={320}
          hideCaption={true}
          containerTagName="div"
          protocol=""
          injectScript
        />
      );
    })}
  </Stack>
);

const Home = () => (
  <Layout>
    <>
      <Description />
      <Instagram />
    </>
  </Layout>
);

export default Home;
