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
}
interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const LoginPage: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const context = useAuth();

  const fromPage = (location.state as LocationState)?.from?.pathname || '/';

  const handleSubmit = (event: FormEvent<YourFormElement>) => {
    event.preventDefault();
    const user = event.currentTarget.elements.userName?.value;
    context?.signIn(user, () => navigate(fromPage, { replace: true }));
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userName">
          Name: <input id="userName" type="text" />
          <button type="submit">Login</button>
        </label>
      </form>
    </div>
  );
};

export default LoginPage;
