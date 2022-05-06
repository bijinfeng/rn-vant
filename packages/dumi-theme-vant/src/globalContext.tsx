import React, { useRef, useEffect, useCallback } from 'react';
import { initGlobalState, MicroAppStateActions } from 'qiankun';
import { Theme, useColor } from './hooks';

export interface GlobalState {
  theme: 'light' | 'dark';
  setTheme: (theme: Theme) => void;
}

export const globalContext = React.createContext<GlobalState>({} as GlobalState);

export const GlobalContextProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useColor();
  const actions = useRef<MicroAppStateActions>(initGlobalState({ theme }));

  useEffect(() => {
    actions.current.onGlobalStateChange((state, prev) => {
      if (state.theme !== prev.theme) {
        setTheme(state.theme);
      }
    });
    return () => {
      actions.current.offGlobalStateChange();
    };
  }, []);

  const setColor = useCallback((color: Theme) => {
    actions.current.setGlobalState({ theme: color });
    setTheme(color);
  }, []);

  return (
    <globalContext.Provider value={{ theme, setTheme: setColor }}>
      {children}
    </globalContext.Provider>
  );
};
