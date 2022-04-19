import NotFoundPage from 'pages/NotFound';
import GeneralPage from 'pages/General';
import LoginPage from 'pages/Login';
import EditPage from 'pages/Edit/EditPage';
import SinglePage from 'pages/Single/SinglePage';
import CreatePage from 'pages/Create/CreatePage';
import { BY_ID, CREATE, EDIT, GENERAL, LOGIN, NOT_FOUND } from 'constants/path';

export const privateRoutes = [
  { path: GENERAL, component: GeneralPage },
  { path: BY_ID, component: SinglePage },
  { path: CREATE, component: CreatePage },
  { path: EDIT, component: EditPage },
  { path: NOT_FOUND, component: NotFoundPage },
];
export const publicRoutes = [{ path: LOGIN, component: LoginPage }];
