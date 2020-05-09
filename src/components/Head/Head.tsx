import React from 'react';
import NextHead from 'next/head';

const SITE_NAME = 'Vineria Sorcuore';

type Props = {
  title: string;
  description?: string;
  keywords?: string[];
  imageUrl?: string;
};

// LayoutとPage両方でHeadが使用される場合は、Pageで指定されたタグが優先される
export const Head: React.FC<Props> = ({ title, description, keywords = [], imageUrl }) => {
  return (
    <NextHead>
      <title key="title">{title}</title>

      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      {description && <meta key="og:description" property="og:description" content={description} />}
      {keywords.length > 0 && <meta key="keywords" name="keywords" content={keywords.join(',')} />}
      <meta key="og:type" property="og:type" content="website" />
      {imageUrl && <meta key="og:image" property="og:image" content={imageUrl} />}

      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:title" name="twitter:title" content={title} />
      {description && <meta key="twitter:description" name="twitter:description" content={description} />}
      {imageUrl && <meta key="twitter:image" name="twitter:image" content={imageUrl} />}
    </NextHead>
  );
};
