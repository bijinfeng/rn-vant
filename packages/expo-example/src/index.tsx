import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { useColorScheme, StatusBar, View, ColorSchemeName } from 'react-native';
import { ConfigProvider, defaultTheme, darkTheme } from 'dice-ui';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Navigation from './navigation';
import { lightTheme, darkTheme as darkThemeVars } from './style/vars';
import { GlobalContext, GlobalState } from './GlobalContext';

interface LayoutProps {
  theme?: ColorSchemeName;
  onThemeChange?: (theme: ColorSchemeName) => void;
}

const Layout = (props: LayoutProps): JSX.Element => {
  const defaultThemeScahme = useColorScheme();
  const { theme = defaultThemeScahme, onThemeChange } = props;
  const [themeMode, setThemeMode] = useState<ColorSchemeName>(theme);
  const isDarkMode = themeMode === 'dark';

  useEffect(() => {
    setThemeMode(theme);
  }, [theme]);

  const setTheme = useCallback((_theme: ColorSchemeName) => {
    onThemeChange?.(_theme);
    setThemeMode(theme);
  }, []);

  const globalState = useMemo<GlobalState>(
    () => ({
      themeMode,
      isDarkMode,
      themeVars: isDarkMode ? darkThemeVars : lightTheme,
      setThemMode: setTheme,
    }),
    [themeMode, isDarkMode, setTheme]
  );

  return (
    <GlobalContext.Provider value={globalState}>
      <SafeAreaProvider>
        <ConfigProvider theme={isDarkMode ? darkTheme : defaultTheme}>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <View style={{ flex: 1 }}>
            <Navigation colorScheme={themeMode} />
          </View>
        </ConfigProvider>
      </SafeAreaProvider>
    </GlobalContext.Provider>
  );
};

export default Layout;
