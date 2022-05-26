import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/UI/Layout/Layout';
import AuthProvider from 'hoc/AuthProvider';
import RequireAuth from 'hoc/RequireAuth';
import NotFoundPage from 'pages/NotFound';
import GeneralPage from 'pages/General';
import LoginPage from 'pages/Login';
import EditPage from 'pages/Edit/EditPage';
import SinglePage from 'pages/Single/SinglePage';
import CreatePage from 'pages/Create/CreatePage';
import Apod from 'pages/Apod/Apod';

import { LOGIN, GENERAL, BY_ID, EDIT_POST, CREATE, NOT_FOUND, APOD } from 'constants/path';
// import { privateRoutes } from './routes';

const AppRouter: FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path={GENERAL} element={<Layout />}>
          <Route index element={<GeneralPage />} />
          <Route path={APOD} element={<Apod />} />
          <Route path={LOGIN} element={<LoginPage />} />
          <Route path={BY_ID} element={<SinglePage />} />
          <Route
            path={CREATE}
            element={
              <RequireAuth>
                <CreatePage />
              </RequireAuth>
            }
          />
          <Route path={EDIT_POST} element={<EditPage />} />
          <Route path={NOT_FOUND} element={<NotFoundPage />} />
          {/* {privateRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))} */}
          {/* <Route path={NOT_FOUND} element={<Navigate to={GENERAL} replace />} /> */}
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default AppRouter;
