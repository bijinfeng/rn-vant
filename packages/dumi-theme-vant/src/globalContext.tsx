import React, { useRef, useEffect, useCallback } from 'react';
import { initGlobalState, MicroAppStateActions } from 'qiankun';
import { Theme, useColor, useThemeConfig } from './hooks';

export interface GlobalState {
  theme: 'light' | 'dark';
  base: string;
  setTheme: (theme: Theme) => void;
}

export const globalContext = React.createContext<GlobalState>({} as GlobalState);

export const GlobalContextProvider: React.FC = ({ children }) => {
  const { base } = useThemeConfig();
  const [theme, setTheme] = useColor();
  const actions = useRef<MicroAppStateActions>(initGlobalState({ theme, base }));
  const cacheGlobalState = useRef({});

  useEffect(() => {
    actions.current.onGlobalStateChange((state, prev) => {
      cacheGlobalState.current = state;

      if (state.theme !== prev.theme) {
        setTheme(state.theme);
      }
    });
    return () => {
      actions.current.offGlobalStateChange();
    };
  }, []);

  const setColor = useCallback((color: Theme) => {
    actions.current.setGlobalState({ ...cacheGlobalState.current, theme: color });
    setTheme(color);
  }, []);

  return (
    <globalContext.Provider value={{ theme, setTheme: setColor, base }}>
      {children}
    </globalContext.Provider>
  );
};
