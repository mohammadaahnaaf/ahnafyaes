import React, { ReactNode } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';

interface MainProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  fullPage?: boolean;
}

const Main = ({
  title,
  description = "Mohammed Ahnaf's personal website.",
  children = null,
  fullPage = false,
}: MainProps) => (
  <HelmetProvider>
    <Helmet titleTemplate="%s | Ahnafya" defaultTitle="Ahnafya">
      {title && <title>{title}</title>}
      <meta name="description" content={description} />
    </Helmet>
    <div id="wrapper">
      <Navigation />
      <div id="main">
        {children}
      </div>
      {fullPage ? null : <SideBar />}
    </div>
  </HelmetProvider>
);

export default Main;
