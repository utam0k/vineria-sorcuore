import React from 'react';
import { DescriptionItem } from './DescriptionItem';

export default { title: 'DescriptionItem' };

export const a = () => (
  <DescriptionItem
    label="ヴィネリアソルクオーレ"
    title="Vineria Sorcuor"
    link={{ label: 'メニューを見る', url: 'https://example.com' }}
  >
    {
      'イタリア語で SORRISO (笑顔) CUORE (心)\nかけ合わせて作った造語それがソルクオーレです。\n心を込めて笑顔になれる楽しい本格イタリアンをお客様にお届けします。\nぜひ、素敵な時間をお過ごしください。'
    }
  </DescriptionItem>
);
