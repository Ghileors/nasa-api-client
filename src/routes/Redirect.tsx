import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const Redirect = (to: string) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
};
