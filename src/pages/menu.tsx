import React, { useState, useCallback } from 'react';
import { Heading, Flex, Text, Box, useTheme } from '@chakra-ui/core';
import { Card } from '../components/Card/Card';
import { ImageModal } from '../molecules/ImageModal/ImageModal';
import { Layout } from '../templates/Layout/Layout';

const Menu = () => {
  const theme = useTheme();

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState<string>('');
  const [imageUrl, setImageUrl] = useState<string>();

  const onImageClick = useCallback((title: string, imageUrl: string) => {
    setModalOpen(true);
    setImageUrl(imageUrl);
    setModalTitle(title);
  }, []);

  const onModalClose = useCallback(() => {
    setModalOpen(false);
  }, []);

  return (
    <Layout>
      <Box as="header" textAlign="center">
        <Heading as="h1" marginTop={theme.space[8]}>
          ソルクオーレの食卓
        </Heading>
        <Text marginBottom={theme.space[12]} marginTop={theme.space[8]} whiteSpace="pre-wrap">
          {`テイクアウトでお手軽にソルクオーレの本格イタリアンを楽しめるシリーズです！\n夜ご飯のおかずに困ったとき、お酒のお供に。`}
        </Text>
      </Box>
      <Flex align="center" justify="center" flexWrap="wrap">
        <Card
          title="イタリア風合鴨のスモーク"
          price={1800}
          description="最高のおつまみを作りました。自然解凍がオススメです。"
          imageUrl="http://urx.red/Rj8J"
          imageAlt="鴨肉"
          onImageClick={onImageClick}
        />
        <Card
          title="常陽ポークのポルケッタ・ピッツァイオーラソース"
          price={3200}
          description="ハーブを巻き込んだ豚肉のロースト。レストランのメインディッシュをご自宅で。"
          imageUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/94709958_2545849012330031_6476683338649059117_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=111&_nc_ohc=fupH_lvpLP8AX9tuezp&oh=9c63e27f6393a220cec1f3aa9f9c09f2&oe=5ECB6455"
          imageAlt="ミネストローネ"
        />
        <Card
          title="トリッパ フィオレンティーナ"
          price={1400}
          description="本場イタリアの味。牛蜂の巣のトマト煮込み"
          imageUrl="https://scontent-nrt1-1.xx.fbcdn.net/v/t1.0-9/93572458_212850583497875_4993414164710948864_n.jpg?_nc_cat=102&_nc_sid=110474&_nc_oc=AQm1CBWFlfHASpwLQVEqOcwXO9wQJj7-3bnH3aHI5Bc-gqr14j6i83jEAjD9emsNQ_w&_nc_ht=scontent-nrt1-1.xx&oh=01e451c61956a07c5692346abc4f5a97&oe=5EC74D7C"
          imageAlt="トリッパ"
        />
        <Card
          title="ソルクオーレ高級カレー"
          price={2000}
          description="贅沢な食材を使った自家製カレー"
          imageUrl="https://scontent-nrt1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/93451321_258716218499341_8706671380727893290_n.jpg?_nc_ht=scontent-nrt1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=x8kSHBy_1-gAX8WZXv_&oh=5566ac4890eff2c35a254331157bee80&oe=5ECAF781"
          imageAlt="ソルクオーレ高級カレー"
        />
        <Card
          title="イタリア風合鴨のスモーク2"
          price={1800}
          description="最高のおつまみを作りました。自然解凍がオススメです。"
          imageUrl="http://urx.red/Rj8J"
          imageAlt="鴨肉"
        />
        <Card
          title="イタリア風合鴨のスモーク2"
          price={1800}
          description="最高のおつまみを作りました。自然解凍がオススメです。"
          imageUrl="http://urx.red/Rj8J"
          imageAlt="鴨肉"
        />
        <Card
          title="イタリア風合鴨のスモーク2"
          price={1800}
          description="最高のおつまみを作りました。自然解凍がオススメです。"
          imageUrl="http://urx.red/Rj8J"
          imageAlt="鴨肉"
        />
        <Card
          title="イタリア風合鴨のスモーク2"
          price={1800}
          description="最高のおつまみを作りました。自然解凍がオススメです。"
          imageUrl="http://urx.red/Rj8J"
          imageAlt="鴨肉"
        />
        <Card
          title="イタリア風合鴨のスモーク2"
          price={1800}
          description="最高のおつまみを作りました。自然解凍がオススメです。"
          imageUrl="http://urx.red/Rj8J"
          imageAlt="鴨肉"
        />
        <Card
          title="イタリア風合鴨のスモーク2"
          price={1800}
          description="最高のおつまみを作りました。自然解凍がオススメです。"
          imageUrl="http://urx.red/Rj8J"
          imageAlt="鴨肉"
        />
        <Card
          title="イタリア風合鴨のスモーク2"
          price={1800}
          description="最高のおつまみを作りました。自然解凍がオススメです。"
          imageUrl="http://urx.red/Rj8J"
          imageAlt="鴨肉"
        />
        <Card
          title="イタリア風合鴨のスモーク2"
          price={1800}
          description="最高のおつまみを作りました。自然解凍がオススメです。"
          imageUrl="http://urx.red/Rj8J"
          imageAlt="鴨肉"
        />
        <Card
          title="イタリア風合鴨のスモーク2"
          price={1800}
          description="最高のおつまみを作りました。自然解凍がオススメです。"
          imageUrl="http://urx.red/Rj8J"
          imageAlt="鴨肉"
        />
      </Flex>
      <ImageModal isOpen={isModalOpen} imageUrl={imageUrl} title={modalTitle} onClose={onModalClose} />
    </Layout>
  );
};

export default Menu;
