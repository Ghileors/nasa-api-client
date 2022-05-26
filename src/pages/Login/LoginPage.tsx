import React, { FC, FormEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from 'hook/useAuth';
interface LocationState {
  from: {
    pathname: string;
  };
}
interface FormElements extends HTMLFormControlsCollection {
  userName: HTMLInputElement;
  userPassword: HTMLInputElement;
}
interface LoginFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const context = useAuth();

  const fromPage = (location.state as LocationState)?.from?.pathname || '/';

  const handleSubmit = (event: FormEvent<LoginFormElement>) => {
    event.preventDefault();
    const userName = event.currentTarget.elements.userName?.value;
    const userPassword = event.currentTarget.elements.userPassword?.value;
    context?.signIn(userName, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name: <input name="userName" type="text" />
          Password: <input name="userPassword" type="password" />
          <button type="submit">Login</button>
        </label>
      </form>
    </div>
  );
};

export default LoginPage;
