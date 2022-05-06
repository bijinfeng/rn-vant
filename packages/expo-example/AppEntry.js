import 'expo/build/Expo.fx';
import { activateKeepAwake } from 'expo-keep-awake';
import registerRootComponent from 'expo/build/launch/registerRootComponent';
import { Platform } from 'react-native';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './src';

if (__DEV__) {
  activateKeepAwake();
}

const inQiankun = Platform.OS === 'web' && window.__POWERED_BY_QIANKUN__;
if (!inQiankun) {
  registerRootComponent(App);
}

// 微应用配置
export function AppContainer(props) {
  const [theme, setTheme] = React.useState();
  const cacheState = React.useRef();

  React.useEffect(() => {
    props.onGlobalStateChange(state => {
      setTheme(state.theme);
      cacheState.current = state;
    }, true);
  }, []);

  const onThemeChange = React.useCallback(_theme => {
    setTheme(_theme);
    props.setGlobalState({
      ...cacheState.current,
      theme: _theme,
    });
  }, []);

  return <App theme={theme} onThemeChange={onThemeChange} />;
}

function render(props) {
  const { container } = props;
  const rootTag = container ? container.querySelector('#root') : document.querySelector('#root');

  ReactDOM.render(<AppContainer {...props} />, rootTag);
}

export async function bootstrap() {
  console.log('[react16] react app bootstraped');
}

export async function mount(props) {
  console.log('[react16] props from main framework', props);
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  const rootTag = container ? container.querySelector('#root') : document.querySelector('#root');

  ReactDOM.unmountComponentAtNode(rootTag);
}
