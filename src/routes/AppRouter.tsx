import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'components/UI/Layout/Layout';
import NotFoundPage from 'pages/NotFound';
import GeneralPage from 'pages/General';
import LoginPage from 'pages/Login';
import EditPage from 'pages/Edit/EditPage';
import SinglePage from 'pages/Single/SinglePage';
import CreatePage from 'pages/Create/CreatePage';
import { LOGIN, GENERAL, BY_ID, EDIT, CREATE, NOT_FOUND } from 'constants/path';

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path={GENERAL} element={<Layout />}>
        <Route index element={<GeneralPage />} />
        <Route path={LOGIN} element={<LoginPage />} />
        <Route path={BY_ID} element={<SinglePage />} />
        <Route path={CREATE} element={<CreatePage />} />
        <Route path={EDIT} element={<EditPage />} />
        <Route path={NOT_FOUND} element={<NotFoundPage />} />
        {/* <Route path={NOT_FOUND} element={<Navigate to={GENERAL} replace />} /> */}
      </Route>
    </Routes>
  );
};

export default AppRouter;
