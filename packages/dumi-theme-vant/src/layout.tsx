import React, { FC, useContext } from 'react';
import type { IRouteComponentProps } from '@umijs/types';
import { context } from 'dumi/theme';

import Header from './components/Header';
import SideMenu from './components/Nav';
import Container from './components/Container';
import Simulator from './components/Simulator';
import { Renderer } from './pages';

import { useMeta } from './hooks';
import { GlobalContextProvider } from './globalContext';
import './style/layout.less';

const Layout: FC<IRouteComponentProps> = ({ children, location }) => {
  const { meta } = useContext(context);
  const { title, desc } = useMeta();

  const showSideMenu = meta.sidemenu !== false;

  return (
    <GlobalContextProvider>
      <div className="vant-doc">
        <Header location={location} />

        {/* 侧边栏 */}
        {showSideMenu && <SideMenu />}

        <Container hasSimulator>
          <Renderer title={title} desc={desc}>
            {children}
          </Renderer>
        </Container>

        <Simulator />
      </div>
    </GlobalContextProvider>
  );
};

export default Layout;
