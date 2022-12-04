import { Route, Routes } from 'react-router-dom';
import { NotFoundView } from '../..';
import SignupView from './SignupView';
import ConfirmEmailView from './ConfirmEmailView';

/**
 * Routes for "Signup" flow
 * url: /auth/signup/*
 */
const SignupRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignupView />} />
      <Route path="confirm-email" element={<ConfirmEmailView />} />
      <Route path="*" element={<NotFoundView />} />
    </Routes>
  );
};

export default SignupRoutes;
