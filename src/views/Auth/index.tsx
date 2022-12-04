import { Route, Routes } from 'react-router-dom';
import { NotFoundView } from '..';
import SignupRoutes from './Signup';
import LoginRoutes from './Login';
import RecoveryRoutes from './Recovery';

/**
 * Routes for "Auth" flow
 * url: /auth/*
 */
const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginRoutes />} />
      <Route path="signup/*" element={<SignupRoutes />} />
      <Route path="login/*" element={<LoginRoutes />} />
      <Route path="recovery/*" element={<RecoveryRoutes />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};

export default AuthRoutes;
