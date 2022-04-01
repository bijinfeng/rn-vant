import { usePrefersColor } from 'dumi/theme';
import { useMemo } from 'react';
import { iframeMessageSwap } from '../utils';

// 系统是否使用暗黑模式
const useDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

type SetColorFunc = ReturnType<typeof usePrefersColor>[1];

export const useColor = (): ['light' | 'dark', SetColorFunc] => {
  const [color, setColor] = usePrefersColor();

  const themeColor = useMemo<'light' | 'dark'>(() => {
    if (color === 'auto') {
      return useDark ? 'light' : 'dark';
    }

    iframeMessageSwap.postMessage('theme', color);

    return color;
  }, [color]);

  return [themeColor, setColor];
};
