import { useState, useEffect } from 'react';

const isClient = typeof window === 'object';

const getSize = () => ({
  width: isClient ? window.innerWidth : undefined,
  height: isClient ? window.innerHeight : undefined,
});

// TODO: Timeout(https://dev.to/vitaliemaldur/resize-event-listener-using-react-hooks-1k0c)
export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(getSize());

  useEffect(() => {
    if (!isClient) {
      // return false;
      return;
    }

    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
};
