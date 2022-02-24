import React, { FC } from 'react';
import s from './RowLayout.module.css';

interface LayoutProps {
  children?: React.ReactNode;
}

const MainLayout: FC<LayoutProps> = (props) => {
  return (
    <>
      <main className={s.rowLayoutContainer}>{props.children}</main>
    </>
  );
};

export default MainLayout;
