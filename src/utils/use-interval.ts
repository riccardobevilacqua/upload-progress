// Source: https://usehooks-typescript.com/use-interval/

import { useEffect, useRef } from 'react';

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef<() => void | null>();

  useEffect(() => {
    savedCallback.current = callback;
  })

  useEffect(() => {
    function tick() {
      if (typeof savedCallback?.current !== 'undefined') {
        savedCallback?.current();
      }
    }

    if (!!delay) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id)
    }
  }, [delay]);
}
