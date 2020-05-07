import React, { useEffect, useState } from 'react';
import { Head } from '../../components/Head/Head';
import { Header } from '../../organisms/Header/Header';
import { initGA, logPageView } from '../../utils/analytics';

type Props = React.ComponentProps<typeof Header>;

export const Layout: React.FC<Props> = ({ children, ...props }) => {
  const [gaInitialize, setGaInitialize] = useState(false);

  useEffect(() => {
    if (!gaInitialize) {
      initGA();
      setGaInitialize(true);
    }
    logPageView();
  }, []);

  return (
    <>
      <Head
        title="Vineria Sorcuor"
        description="イタリア語で SORRISO (笑顔) CUORE (心)。かけ合わせて作った造語それがソルクオーレです。心を込めて笑顔になれる楽しい本格イタリアンをお客様にお届けします。ぜひ、素敵な時間をお過ごしください。"
        keywords={['Vineria Sorcuor', 'ヴィネリア ソルクオーレ', '両国', 'イタリアン']}
        imageUrl="https://jimdo-storage.freetls.fastly.net/image/59782918/5404c779-15aa-4d6d-91bb-f4083dbc737d.jpg"
      />
      <>
        <Header {...props} />
        {children}
      </>
    </>
  );
};
