import React from 'react';

type Props = { children: number };

export const Number: React.FC<Props> = React.memo(({ children }) => {
  return <>{children.toLocaleString()}</>;
});
