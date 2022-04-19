import React, { FC } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { LOGIN } from 'constants/path';
import { IChildren } from 'models/IChildren';
import useAuth from 'hook/useAuth';

const RequireAuth: FC<IChildren> = ({ children }) => {
  const location = useLocation();
  const context = useAuth();

  if (!context?.user) {
    return <Navigate to={LOGIN} state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
