import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: FC = () => (
  <div>
    This Page Doesn&apos;t Exist Go <Link to="/">Home</Link>
  </div>
);

export default NotFoundPage;
