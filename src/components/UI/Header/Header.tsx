import React, { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from 'hook/useAuth';

import './styles.css';

const Header: FC = () => {
  const navigate = useNavigate();
  const context = useAuth();

  return (
    <div>
      <NavLink to="/">General</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/posts/new">Create</NavLink>
      <NavLink to="/not-found">Not Found</NavLink>
      <button onClick={() => context?.signOut(() => navigate('/', { replace: true }))}>
        Logout
      </button>
    </div>
  );
};

export default Header;
