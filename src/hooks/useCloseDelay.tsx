import { useState, useEffect } from 'react';

function useCloseDelay(isClosing: boolean, delay: number) {
  const [closeTimer, setCloseTimer] = useState(false);

  useEffect(() => {
    if (isClosing) {
      setTimeout(() => {
        setCloseTimer(true);
      }, delay);
    }

    return setCloseTimer(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isClosing]);

  return closeTimer;
}

export default useCloseDelay;
