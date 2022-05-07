import React, { FC, useMemo } from 'react';
import * as Linking from 'expo-linking';
import { ColorSchemeName, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { HeaderBackButton } from '@react-navigation/elements';
import { createStackNavigator } from '@react-navigation/stack';
import { DarkTheme, LightTheme } from './navigationTheme';
import { useRoutes } from '../hooks/useRoutes';

import Home from '../pages/index';

const Stack = createStackNavigator();
const prefix = Linking.createURL('/');

const StackNavigator = () => {
  const routes = useRoutes();

  return (
    <Stack.Navigator>
      <Stack.Screen name="/" component={Home} options={{ headerShown: false, title: '首页' }} />
      {routes.map(it => (
        <Stack.Screen
          key={it.href}
          name={it.href}
          component={it.component}
          options={({ navigation }) => ({
            title: it.name,
            // 自定义后退按钮
            headerLeft: props => (
              <HeaderBackButton {...props} onPress={() => navigation.navigate('/')} />
            ),
          })}
        />
      ))}
    </Stack.Navigator>
  );
};

const Navigation: FC<{ colorScheme: ColorSchemeName }> = ({ colorScheme }) => {
  const routes = useRoutes();
  const screens = useMemo(() => {
    return routes.reduce<Record<string, string>>((result, it) => {
      // eslint-disable-next-line no-param-reassign
      result[it.href] = it.href;
      return result;
    }, {});
  }, [routes]);

  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : LightTheme}
      fallback={<Text>Loading...</Text>}
      linking={{
        prefixes: [prefix],
        config: {
          screens: {
            '/': '/',
            ...screens,
          },
        },
      }}
    >
      <StackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
