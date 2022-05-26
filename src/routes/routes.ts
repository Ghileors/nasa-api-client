import { PathRouteProps } from 'react-router-dom';
import NotFoundPage from 'pages/NotFound';
import GeneralPage from 'pages/General';
import LoginPage from 'pages/Login';
import EditPage from 'pages/Edit/EditPage';
import SinglePage from 'pages/Single/SinglePage';
import CreatePage from 'pages/Create/CreatePage';
import { BY_ID, CREATE, EDIT_POST, GENERAL, LOGIN, NOT_FOUND } from 'constants/path';

export const privateRoutes: PathRouteProps[] = [
  // { path: GENERAL, element: GeneralPage },
  // { path: BY_ID, element: SinglePage },
  // { path: CREATE, element: CreatePage },
  // { path: EDIT_POST, element: EditPage },
  // { path: NOT_FOUND, element: NotFoundPage },
];
export const publicRoutes = [{ path: LOGIN, element: LoginPage }];
