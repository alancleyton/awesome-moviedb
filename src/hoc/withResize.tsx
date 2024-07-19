import React, { useState, useEffect } from 'react';

export interface WithResizeProps {
  windowSize?: number;
}

/**
 * HOC that listens to the window resize event.
 * @param {ReactElement} ReactComponent - React component.
 */
export function withResize<P>(WrappedComponent: React.FC<P>) {
  return (props: P) => {
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    const updateWindowSize = (event: UIEvent) => {
      const e = event.target as Window;
      setWindowSize(e.innerWidth);
    };

    useEffect(() => {
      window.addEventListener('resize', updateWindowSize);

      return () => {
        window.removeEventListener('resize', updateWindowSize);
      };
    }, [windowSize]);

    return <WrappedComponent {...props} windowSize={windowSize} />;
  };
}
