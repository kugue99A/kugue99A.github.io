import React, { FC } from 'react';
import s from './MainLayout.module.css';

interface LayoutProps {
  children?: React.ReactNode;
}

const MainLayout: FC<LayoutProps> = (props) => {
  return (
    <>
      <main className={s.mainLayoutContainer}>{props.children}</main>
    </>
  );
};

export default MainLayout;
