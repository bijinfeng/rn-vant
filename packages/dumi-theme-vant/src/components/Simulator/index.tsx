import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { MicroApp } from 'umi';
import './index.less';

const Simulator = (): JSX.Element => {
  const [fixed, setFiexed] = useState<boolean>(false);

  const setTop = useCallback(() => {
    setFiexed(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', setTop);
    return () => window.removeEventListener('scroll', setTop);
  }, []);

  return (
    <div className={clsx('van-doc-simulator', { 'van-doc-simulator-fixed': fixed })}>
      <MicroApp name="demo" />
    </div>
  );
};

export default Simulator;
