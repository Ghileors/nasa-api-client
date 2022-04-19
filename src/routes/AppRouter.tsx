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

import { LOGIN, GENERAL, BY_ID, EDIT, CREATE, NOT_FOUND } from 'constants/path';
// import { privateRoutes } from './routes';

const AppRouter: FC = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path={GENERAL} element={<Layout />}>
          <Route index element={<GeneralPage />} />
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
          <Route path={EDIT} element={<EditPage />} />
          <Route path={NOT_FOUND} element={<NotFoundPage />} />
          {/* {privateRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={<RequireAuth>{component}</RequireAuth>} />
        ))} */}
          {/* <Route path={NOT_FOUND} element={<Navigate to={GENERAL} replace />} /> */}
        </Route>
      </Routes>
    </AuthProvider>
  );
};

export default AppRouter;
