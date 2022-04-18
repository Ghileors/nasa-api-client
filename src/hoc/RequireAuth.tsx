import React, { ReactChild } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { LOGIN } from 'constants/path';

interface AuxProps {
  children: ReactChild | ReactChild[];
}

const RequireAuth = ({ children }: AuxProps) => {
  const location = useLocation();
  const auth = false;

  if (!auth) {
    return <Navigate to={LOGIN} state={{ from: location }} />;
  }

  return children;
};

export default RequireAuth;
