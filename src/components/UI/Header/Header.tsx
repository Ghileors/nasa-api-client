import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

const Header: FC = () => (
  <div>
    <NavLink to="/">General</NavLink>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/posts/new">Create</NavLink>
    <NavLink to="/not-found">Not Found</NavLink>
  </div>
);

export default Header;
