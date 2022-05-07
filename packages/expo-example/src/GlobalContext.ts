import React from 'react';
import { ColorSchemeName } from 'react-native';
import { lightTheme } from './style/vars';

export interface GlobalState {
  base: string;
  themeMode: ColorSchemeName;
  isDarkMode: boolean;
  themeVars: typeof lightTheme;
  setThemMode: (theme: ColorSchemeName) => void;
}

export const GlobalContext = React.createContext<GlobalState>({} as GlobalState);
