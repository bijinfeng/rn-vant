import React, { FC, useState, useEffect, useMemo } from 'react';
import clsx from 'clsx';

import './index.less';

export interface SimulatorProps {
  src: string;
}

const Simulator: FC<SimulatorProps> = ({ src }) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const simulatorStyle = useMemo(() => {
    const height = Math.min(640, window.innerHeight - 90);
    return {
      height: `${height}px`,
    };
  }, [windowHeight]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollTop(window.scrollY);
    });
    window.addEventListener('resize', () => {
      setWindowHeight(window.innerHeight);
    });
  }, []);

  return (
    <div className={clsx('van-doc-simulator', { 'van-doc-simulator-fixed': scrollTop > 60 })}>
      <iframe title="vant-ui-iframe" src={src} style={simulatorStyle} frameBorder="0" />
    </div>
  );
};

export default Simulator;
