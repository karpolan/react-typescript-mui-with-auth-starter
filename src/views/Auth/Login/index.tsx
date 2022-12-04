import { Route, Routes } from 'react-router-dom';
import { NotFoundView } from '../..';
import LoginEmailView from './LoginEmailView';

/**
 * Routes for "Login" flow
 * url: /auth/login/*
 */
const LoginRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginEmailView />} />
      <Route path="email" element={<LoginEmailView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};

export default LoginRoutes;
