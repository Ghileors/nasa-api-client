import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Layout: FC = () => (
  <>
    <Header />

    <Outlet />

    <footer>2022</footer>
  </>
);

export { Layout };
